import { ConfigService } from '@nestjs/config';
import { ThrottlerModuleOptions } from '@nestjs/throttler';

/**
 * Rate limiting configuration with multiple tiers.
 *
 * Each tier reads its values from environment variables with sensible defaults:
 * - THROTTLE_SHORT_TTL / THROTTLE_SHORT_LIMIT  (burst protection, default 1 s / 10 req)
 * - THROTTLE_MEDIUM_TTL / THROTTLE_MEDIUM_LIMIT (default 10 s / 100 req)
 * - THROTTLE_LONG_TTL / THROTTLE_LONG_LIMIT     (default 60 s / 1 000 req)
 *
 * The legacy THROTTLE_TTL and THROTTLE_LIMIT variables override the "long" tier
 * to stay backwards-compatible with the env vars declared in the recipe definition.
 */
export const throttlerConfigFactory = (configService: ConfigService): ThrottlerModuleOptions => ({
  throttlers: [
    {
      name: 'short',
      ttl: configService.get<number>('THROTTLE_SHORT_TTL', 1000),
      limit: configService.get<number>('THROTTLE_SHORT_LIMIT', 10),
    },
    {
      name: 'medium',
      ttl: configService.get<number>('THROTTLE_MEDIUM_TTL', 10_000),
      limit: configService.get<number>('THROTTLE_MEDIUM_LIMIT', 100),
    },
    {
      name: 'long',
      ttl: configService.get<number>('THROTTLE_TTL', 60_000),
      limit: configService.get<number>('THROTTLE_LIMIT', 1000),
    },
  ],
});
