import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import CircuitBreaker from 'opossum';

export interface CircuitBreakerOptions {
  /** Time in ms before a request is considered timed out */
  timeout?: number;
  /** Percentage of failures before opening the circuit */
  errorThresholdPercentage?: number;
  /** Time in ms to wait before attempting to close the circuit */
  resetTimeout?: number;
  /** Number of requests to allow in half-open state */
  rollingCountBuckets?: number;
  /** Time in ms for the rolling statistical window */
  rollingCountTimeout?: number;
}

const HARDCODED_DEFAULTS: CircuitBreakerOptions = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30_000,
  rollingCountBuckets: 10,
  rollingCountTimeout: 10_000,
};

/**
 * Build default options by reading CIRCUIT_BREAKER_* env vars via ConfigService.
 * Falls back to hardcoded defaults when the env vars are not set or no ConfigService is provided.
 */
function buildDefaults(configService?: ConfigService): CircuitBreakerOptions {
  if (!configService) {
    return { ...HARDCODED_DEFAULTS };
  }

  return {
    timeout: configService.get<number>('CIRCUIT_BREAKER_TIMEOUT', HARDCODED_DEFAULTS.timeout!),
    errorThresholdPercentage: configService.get<number>(
      'CIRCUIT_BREAKER_THRESHOLD',
      HARDCODED_DEFAULTS.errorThresholdPercentage!,
    ),
    resetTimeout: configService.get<number>(
      'CIRCUIT_BREAKER_RESET_TIMEOUT',
      HARDCODED_DEFAULTS.resetTimeout!,
    ),
    rollingCountBuckets: HARDCODED_DEFAULTS.rollingCountBuckets,
    rollingCountTimeout: HARDCODED_DEFAULTS.rollingCountTimeout,
  };
}

export class CircuitBreakerWrapper<TResult = unknown> {
  private readonly logger = new Logger(CircuitBreakerWrapper.name);
  private readonly breaker: CircuitBreaker<unknown[], TResult>;

  constructor(
    action: (...args: unknown[]) => Promise<TResult>,
    options: CircuitBreakerOptions = {},
    configService?: ConfigService,
  ) {
    const mergedOptions = { ...buildDefaults(configService), ...options };

    this.breaker = new CircuitBreaker(action, mergedOptions);

    this.breaker.on('open', () => {
      this.logger.warn('Circuit breaker opened — requests will be short-circuited');
    });

    this.breaker.on('halfOpen', () => {
      this.logger.log('Circuit breaker half-open — testing with next request');
    });

    this.breaker.on('close', () => {
      this.logger.log('Circuit breaker closed — normal operation resumed');
    });

    this.breaker.on('fallback', () => {
      this.logger.debug('Circuit breaker fallback triggered');
    });

    this.breaker.on('timeout', () => {
      this.logger.warn('Circuit breaker request timed out');
    });
  }

  async fire(...args: unknown[]): Promise<TResult> {
    return this.breaker.fire(...args);
  }

  fallback(fn: (...args: unknown[]) => TResult): this {
    this.breaker.fallback(fn);
    return this;
  }

  get isOpen(): boolean {
    return !this.breaker.closed;
  }

  get stats(): CircuitBreaker.Stats {
    return this.breaker.stats;
  }
}
