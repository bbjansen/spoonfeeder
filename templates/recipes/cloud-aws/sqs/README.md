# AWS SQS

Amazon Simple Queue Service integration for reliable message queuing in NestJS.

## Documentation

- [AWS SQS Developer Guide](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/)
- [@aws-sdk/client-sqs on npm](https://www.npmjs.com/package/@aws-sdk/client-sqs)
- [NestJS Microservices — Custom Transporters](https://docs.nestjs.com/microservices/custom-transport)

## Dependencies

| Package               | Version   | Purpose               |
| --------------------- | --------- | --------------------- |
| `@aws-sdk/client-sqs` | `3.712.0` | AWS SDK v3 SQS client |

## Environment Variables

| Variable        | Default     | Description   |
| --------------- | ----------- | ------------- |
| `AWS_REGION`    | `eu-west-1` | AWS region    |
| `SQS_QUEUE_URL` | —           | SQS queue URL |

## Usage

```typescript
import { SqsService } from '@/infrastructure/aws/sqs.service';

@Injectable()
export class OrderProcessor {
  constructor(
    private readonly sqs: SqsService,
    private readonly configService: ConfigService,
  ) {}

  async enqueue(order: Order): Promise<void> {
    const queueUrl = this.configService.get<string>('SQS_QUEUE_URL');
    await this.sqs.sendMessage(queueUrl, JSON.stringify(order));
  }

  async poll(): Promise<Order[]> {
    const queueUrl = this.configService.get<string>('SQS_QUEUE_URL');
    const messages = await this.sqs.receiveMessages(queueUrl, 10, 20);
    return messages.map((m) => JSON.parse(m.Body!));
  }
}
```
