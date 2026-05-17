# AWS S3

Amazon S3 object storage integration for file uploads and downloads in NestJS.

## Documentation

- [AWS S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/)
- [@aws-sdk/client-s3 on npm](https://www.npmjs.com/package/@aws-sdk/client-s3)
- [@aws-sdk/s3-request-presigner on npm](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)
- [NestJS File Upload](https://docs.nestjs.com/techniques/file-upload)

## Dependencies

| Package                         | Version   | Purpose                 |
| ------------------------------- | --------- | ----------------------- |
| `@aws-sdk/client-s3`            | `3.712.0` | AWS SDK v3 S3 client    |
| `@aws-sdk/s3-request-presigner` | `3.712.0` | Generate presigned URLs |

## Environment Variables

| Variable     | Default     | Description    |
| ------------ | ----------- | -------------- |
| `AWS_REGION` | `eu-west-1` | AWS region     |
| `S3_BUCKET`  | `my-bucket` | S3 bucket name |

## Usage

```typescript
import { S3Service } from '@/infrastructure/aws/s3.service';

@Injectable()
export class FileUploader {
  constructor(private readonly s3: S3Service) {}

  async upload(bucket: string, key: string, body: Buffer): Promise<string> {
    await this.s3.upload(bucket, key, body);
    return this.s3.getPresignedUrl(bucket, key, 3600);
  }

  async download(bucket: string, key: string): Promise<Readable> {
    return this.s3.download(bucket, key);
  }
}
```
