import { Injectable, OnApplicationShutdown, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const DEFAULT_SHUTDOWN_TIMEOUT_MS = 10_000;

@Injectable()
export class ShutdownService implements OnApplicationShutdown {
  private readonly logger = new Logger(ShutdownService.name);
  private readonly cleanupFns: (() => Promise<void>)[] = [];
  private readonly timeoutMs: number;

  constructor(configService?: ConfigService) {
    this.timeoutMs =
      configService?.get<number>('SHUTDOWN_TIMEOUT_MS', DEFAULT_SHUTDOWN_TIMEOUT_MS) ??
      DEFAULT_SHUTDOWN_TIMEOUT_MS;
  }

  registerCleanup(fn: () => Promise<void>): void {
    this.cleanupFns.push(fn);
  }

  async onApplicationShutdown(signal?: string): Promise<void> {
    this.logger.log(`Shutting down (signal: ${signal ?? 'none'})...`);

    const cleanup = async () => {
      for (const fn of this.cleanupFns) {
        try {
          await fn();
        } catch (error) {
          this.logger.error(
            `Cleanup failed: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }
    };

    const timeout = new Promise<void>((_, reject) =>
      setTimeout(
        () => reject(new Error(`Shutdown timed out after ${this.timeoutMs}ms`)),
        this.timeoutMs,
      ),
    );

    try {
      await Promise.race([cleanup(), timeout]);
    } catch (error) {
      this.logger.error(error instanceof Error ? error.message : String(error));
    }

    this.logger.log('Shutdown complete');
  }
}
