# Graceful Shutdown

Graceful application shutdown using NestJS lifecycle events.

## Links

- [NestJS Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
- [NestJS Application Shutdown](https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown)

## Dependencies

No additional dependencies required. Uses built-in NestJS lifecycle hooks.

| Package | Version | Purpose                          |
| ------- | ------- | -------------------------------- |
| (none)  | -       | Built-in NestJS lifecycle events |

## Environment Variables

| Variable              | Default | Description                        |
| --------------------- | ------- | ---------------------------------- |
| `SHUTDOWN_TIMEOUT_MS` | `10000` | Max wait time for graceful shutdown |

## Usage

Enable shutdown hooks in `main.ts`:

```typescript
const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

app.enableShutdownHooks();

await app.listen(3000, '0.0.0.0');
```

Register cleanup functions with `ShutdownService`:

```typescript
import { ShutdownService } from '@/shared/lifecycle/shutdown.service';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private readonly shutdownService: ShutdownService) {}

  onModuleInit(): void {
    this.shutdownService.registerCleanup(async () => {
      await this.pool.end();
    });
  }
}
```

The `ShutdownService` reads `SHUTDOWN_TIMEOUT_MS` from the environment. If cleanup
functions take longer than this timeout, the shutdown proceeds and logs an error.

## Generated Files

| File                                       | Description                                                   |
| ------------------------------------------ | ------------------------------------------------------------- |
| `src/shared/lifecycle/shutdown.service.ts` | Shutdown service with configurable timeout and cleanup registry |
