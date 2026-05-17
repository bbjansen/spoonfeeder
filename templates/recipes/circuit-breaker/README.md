# Circuit Breaker

Fault tolerance pattern using Opossum to prevent cascading failures in distributed systems.

## Links

- [Opossum on npm](https://www.npmjs.com/package/opossum)
- [Opossum on GitHub](https://github.com/nodeshift/opossum)
- [Circuit Breaker Pattern (Martin Fowler)](https://martinfowler.com/bliki/CircuitBreaker.html)

## Dependencies

| Package   | Version | Purpose                        |
| --------- | ------- | ------------------------------ |
| `opossum` | `8.1.4` | Circuit breaker implementation |

## Usage

```typescript
import { CircuitBreakerWrapper } from '@/shared/utils/circuit-breaker';
import { ConfigService } from '@nestjs/config';

// With ConfigService — reads CIRCUIT_BREAKER_TIMEOUT, CIRCUIT_BREAKER_THRESHOLD,
// and CIRCUIT_BREAKER_RESET_TIMEOUT from the environment:
const breaker = new CircuitBreakerWrapper(
  () => httpService.get('https://external-api.com/data'),
  {},
  configService,
);

// With explicit overrides (take precedence over env vars):
const breaker = new CircuitBreakerWrapper(
  () => httpService.get('https://external-api.com/data'),
  { timeout: 5000 },
  configService,
);

const result = await breaker.fire();
```

## Generated Files

| File                                  | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| `src/shared/utils/circuit-breaker.ts` | Opossum circuit breaker wrapper with logging |
