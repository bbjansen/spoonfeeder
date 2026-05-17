# Full Recipe List

Complete catalog of all 112 recipes across 24 categories. Each entry includes the recipe ID, name, description, runtime dependencies, and dev dependencies.

**Jump to a category:**
[Database](#database-10) | [Cache](#cache-1) | [Queue](#queue-3) | [Auth](#auth-11) | [API Docs](#api-docs-1) | [Logging](#logging-2) | [Monitoring](#monitoring-2) | [Error Tracking](#error-tracking-2) | [Storage](#storage-1) | [Email](#email-2) | [WebSockets](#websockets-1) | [GraphQL](#graphql-1) | [CQRS](#cqrs-1) | [Security](#security-6) | [API Patterns](#api-patterns-15) | [Observability](#observability-3) | [DX](#dx-7) | [Operational](#operational-5) | [Repo Hygiene](#repo-hygiene-4) | [Cloud — AWS](#cloud-aws-12) | [Cloud — GCP](#cloud-gcp-10) | [Cloud — Azure](#cloud-azure-10) | [Docs Site](#docs-site-1) | [Testing](#testing-1)

---

## Database (10) { #database-10 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `typeorm-postgres` | TypeORM + PostgreSQL | TypeORM integration with PostgreSQL driver | `@nestjs/typeorm` `typeorm` `pg` | |
| `typeorm-mysql` | TypeORM + MySQL | TypeORM integration with MySQL driver | `@nestjs/typeorm` `typeorm` `mysql2` | |
| `prisma` | Prisma | Schema-first ORM with type-safe client | `@prisma/client` | `prisma` |
| `mongoose` | Mongoose | MongoDB integration with Mongoose ODM | `@nestjs/mongoose` `mongoose` | |
| `drizzle-postgres` | Drizzle ORM + PostgreSQL | Lightweight type-safe ORM | `drizzle-orm` `pg` | `drizzle-kit` |
| `kysely` | Kysely | Type-safe SQL query builder with zero overhead | `kysely` `pg` | `kysely-ctl` |
| `mikro-orm` | MikroORM + PostgreSQL | Data Mapper ORM with Unit of Work for DDD | `@mikro-orm/core` `@mikro-orm/nestjs` `@mikro-orm/postgresql` `@mikro-orm/migrations` | `@mikro-orm/cli` |
| `soft-delete` | Soft Delete | Mark records as deleted instead of removing them | `@nestjs/typeorm` `typeorm` | |
| `audit-trail` | Audit Trail | Record entity changes with user, action, and diff | | |
| `transactional-outbox` | Transactional Outbox | At-least-once event delivery alongside DB writes | `@nestjs/typeorm` `typeorm` | |

## Cache (1) { #cache-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `redis-cache` | Redis Cache | Redis-backed caching with cache-manager | `@nestjs/cache-manager` `cache-manager-redis-yet` `ioredis` | |

## Queue (3) { #queue-3 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `rabbitmq` | RabbitMQ | RabbitMQ message broker integration | `@nestjs/microservices` `amqplib` | `@types/amqplib` |
| `bullmq` | BullMQ | Redis-backed job queue with BullMQ | `@nestjs/bullmq` `bullmq` | |
| `dead-letter-queue` | Dead Letter Queue | DLQ routing and replay for failed messages | | |

## Auth (11) { #auth-11 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `jwt-auth` | JWT Authentication | JWT-based authentication with Passport | `@nestjs/jwt` `@nestjs/passport` `passport-jwt` | `@types/passport-jwt` |
| `passport` | Passport Strategies | Local and JWT strategies | `@nestjs/passport` `passport-local` `passport-jwt` | `@types/passport-local` `@types/passport-jwt` |
| `auth-flows` | Auth Flows | Signup, email verification, password reset | `@nestjs/jwt` `bcrypt` `uuid` | `@types/bcrypt` |
| `api-keys` | API Key Authentication | API key-based auth with custom guard | | |
| `oauth2-introspection` | OAuth 2.0 Token Introspection | RFC 7662 opaque token validation | | |
| `rbac-casl` | RBAC Authorization (CASL) | Role-based access control with CASL | `@casl/ability` | |
| `oauth-google` | Google OAuth | Google OAuth 2.0 login via Passport | `passport-google-oauth20` `@nestjs/passport` `passport` | `@types/passport-google-oauth20` |
| `oauth-github` | GitHub OAuth | GitHub OAuth 2.0 login via Passport | `passport-github2` `@nestjs/passport` `passport` | `@types/passport-github2` |
| `oauth-apple` | Apple OAuth | Sign in with Apple via Passport | `passport-apple` `@nestjs/passport` `passport` | |
| `mfa-totp` | Two-Factor Authentication (TOTP) | TOTP-based 2FA with backup codes | `otplib` `qrcode` | `@types/qrcode` |
| `dpop` | DPoP (Proof of Possession) | RFC 9449 proof-of-possession for OAuth tokens | `jose` | |

## API Docs (1) { #api-docs-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `swagger` | Swagger / OpenAPI | Auto-generated OpenAPI docs with Swagger UI | `@nestjs/swagger` `@fastify/static` | |

## Logging (2) { #logging-2 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `pino` | Pino Logger | Structured JSON logging with Pino | `nestjs-pino` `pino` | `pino-pretty` |
| `winston` | Winston Logger | Flexible logging with Winston transports | `nest-winston` `winston` | |

## Monitoring (2) { #monitoring-2 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `health-checks` | Health Checks | Health check endpoints with Terminus | `@nestjs/terminus` | |
| `prometheus` | Prometheus Metrics | Expose metrics for Prometheus scraping | `prom-client` | |

## Error Tracking (2) { #error-tracking-2 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `sentry` | Sentry | Error tracking and performance monitoring | `@sentry/nestjs` | |
| `seq2` | Seq | Structured log aggregation with Seq | `seq-logging` | |

## Storage (1) { #storage-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `s3-minio` | S3 / MinIO Storage | Object storage (S3-compatible, works with MinIO) | `@aws-sdk/client-s3` `@aws-sdk/s3-request-presigner` | |

## Email (2) { #email-2 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `nodemailer` | Nodemailer | Email sending with templates (Handlebars) | `@nestjs-modules/mailer` `nodemailer` `handlebars` | `@types/nodemailer` |
| `sendgrid` | SendGrid | Transactional email via SendGrid API | `@sendgrid/mail` | |

## WebSockets (1) { #websockets-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `websockets` | WebSockets | Real-time communication with Socket.IO | `@nestjs/websockets` `@nestjs/platform-socket.io` `socket.io` | |

## GraphQL (1) { #graphql-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `graphql-mercurius` | GraphQL (Mercurius) | GraphQL API with Mercurius adapter for Fastify | `@nestjs/graphql` `@nestjs/mercurius` `mercurius` `graphql` | |

## CQRS (1) { #cqrs-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `cqrs` | CQRS | Command Query Responsibility Segregation | `@nestjs/cqrs` | |

## Security (6) { #security-6 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `throttler` | Rate Limiting | Request rate limiting with Throttler | `@nestjs/throttler` | |
| `helmet` | Helmet | HTTP security headers via Fastify Helmet | `@fastify/helmet` | |
| `cors` | CORS | Cross-Origin Resource Sharing configuration | | |
| `csrf` | CSRF Protection | CSRF protection for Fastify | `@fastify/csrf-protection` `@fastify/cookie` | |
| `content-digest` | Content Digest | RFC 9530 content integrity verification | | |
| `data-masking` | Data Masking | Automatic PII redaction in logs and responses | | |

## API Patterns (15) { #api-patterns-15 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `pagination` | Pagination | Cursor and offset pagination | `@nestjs/swagger` | |
| `filtering` | Filtering | Dynamic query filtering | `@nestjs/swagger` | |
| `api-versioning` | API Versioning | URI or header-based versioning | | |
| `correlation-id` | Correlation ID | Request correlation via AsyncLocalStorage | | |
| `http-caching` | HTTP Cache Headers | RFC 9111 Cache-Control headers | | |
| `idempotency` | Idempotency Key | Safe request retries via Idempotency-Key header | | |
| `prefer-header` | Prefer Header | RFC 7240 return=representation and respond-async | | |
| `json-patch` | JSON Patch | RFC 6902 granular document updates | `fast-json-patch` | |
| `json-merge-patch` | JSON Merge Patch | RFC 7396 simple partial updates | | |
| `sse` | Server-Sent Events | Real-time server-to-client streaming | | |
| `request-context` | Request Context (CLS) | AsyncLocalStorage-based request context | `nestjs-cls` | |
| `i18n` | Internationalization | Multi-language support with nestjs-i18n | `nestjs-i18n` | |
| `serialization-groups` | Response Serialization Groups | Role-based field visibility | | |
| `webhooks` | Webhook Delivery | Outbound webhooks with HMAC signing | | |
| `file-upload` | File Upload | Multipart upload with validation | `@fastify/multipart` | |

## Observability (3) { #observability-3 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `opentelemetry` | OpenTelemetry | Distributed tracing and metrics | `@opentelemetry/sdk-node` `@opentelemetry/exporter-trace-otlp-http` `@opentelemetry/instrumentation-http` `@opentelemetry/instrumentation-fastify` `@opentelemetry/resources` `@opentelemetry/semantic-conventions` | |
| `request-logging` | Request Logging | HTTP request/response logging middleware | | |
| `distributed-tracing` | Distributed Tracing | W3C Trace Context propagation | | |

## DX (7) { #dx-7 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `devcontainer` | Dev Container | VS Code Dev Container configuration | | |
| `docker-compose-dev` | Docker Compose Dev | One-command local dev with hot reload | | |
| `config-validation` | Config Schema Validation | Startup env var validation with Zod | `zod` | |
| `database-seeding` | Database Seeding | Seed command for development data | | |
| `database-factories` | Database Factories | Test data factories for entities | | |
| `sdk-generation` | SDK Generation | Auto-generate client SDKs from OpenAPI | | `@openapitools/openapi-generator-cli` |
| `adminjs` | AdminJS | Auto-generated CRUD admin panel | `adminjs` `@adminjs/nestjs` `@adminjs/express` `express` `express-session` `express-formidable` | `@types/express-session` |

## Operational (5) { #operational-5 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `graceful-shutdown` | Graceful Shutdown | Clean shutdown handling for connections | | |
| `circuit-breaker` | Circuit Breaker | Circuit breaker for external service calls | `opossum` | `@types/opossum` |
| `feature-flags` | Feature Flags | Config-based feature flag system | | |
| `multi-tenancy` | Multi-Tenancy | Tenant isolation via AsyncLocalStorage | | |
| `worker-threads` | Worker Threads | Offload CPU-intensive tasks to workers | | |

## Repo Hygiene (4) { #repo-hygiene-4 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `changelog` | Changelog | Auto-generated changelog from commits | | `conventional-changelog-cli` |
| `license` | License | License file template | | |
| `env-per-environment` | Environment Files | Per-environment .env templates | | |
| `dependabot-renovate` | Dependabot / Renovate | Automated dependency update config | | |

## Cloud — AWS (12) { #cloud-aws-12 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `aws-sqs` | AWS SQS | Amazon SQS message queuing | `@aws-sdk/client-sqs` | |
| `aws-sns` | AWS SNS | Amazon SNS pub/sub messaging | `@aws-sdk/client-sns` | |
| `aws-eventbridge` | AWS EventBridge | Amazon EventBridge events | `@aws-sdk/client-eventbridge` | |
| `aws-secrets-manager` | AWS Secrets Manager | Secret retrieval and caching | `@aws-sdk/client-secrets-manager` | |
| `aws-ssm` | AWS SSM Parameter Store | Configuration from SSM | `@aws-sdk/client-ssm` | |
| `aws-s3` | AWS S3 | S3 object storage | `@aws-sdk/client-s3` `@aws-sdk/s3-request-presigner` | |
| `aws-cognito` | AWS Cognito | Cognito user pool auth | `@aws-sdk/client-cognito-identity-provider` `aws-jwt-verify` | |
| `aws-cloudwatch` | AWS CloudWatch Logs | Log shipping to CloudWatch | `@aws-sdk/client-cloudwatch-logs` | |
| `aws-rds` | AWS RDS | RDS connection with IAM auth | `@nestjs/typeorm` `typeorm` `pg` | |
| `aws-dynamodb` | AWS DynamoDB | DynamoDB NoSQL integration | `@aws-sdk/client-dynamodb` `@aws-sdk/lib-dynamodb` | |
| `aws-elasticache` | AWS ElastiCache | ElastiCache (Redis) caching | `ioredis` | |
| `aws-cloudfront` | AWS CloudFront | CloudFront CDN with signed URLs | `@aws-sdk/client-cloudfront` `@aws-sdk/cloudfront-signer` | |

## Cloud — GCP (10) { #cloud-gcp-10 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `gcp-pubsub` | GCP Pub/Sub | Google Cloud Pub/Sub messaging | `@google-cloud/pubsub` | |
| `gcp-secret-manager` | GCP Secret Manager | Secret storage | `@google-cloud/secret-manager` | |
| `gcp-cloud-storage` | GCP Cloud Storage | Object storage | `@google-cloud/storage` | |
| `gcp-cloud-functions` | GCP Cloud Functions | Serverless workloads | `@google-cloud/functions-framework` | |
| `gcp-firebase-auth` | GCP Firebase Auth | Firebase user identity | `firebase-admin` | |
| `gcp-cloud-logging` | GCP Cloud Logging | Stackdriver logging | `@google-cloud/logging` | |
| `gcp-cloud-sql` | GCP Cloud SQL | Managed database via TypeORM | `@nestjs/typeorm` `typeorm` `pg` | |
| `gcp-firestore` | GCP Firestore | Firestore NoSQL database | `@google-cloud/firestore` | |
| `gcp-memorystore` | GCP Memorystore | Memorystore (Redis) caching | `ioredis` | |
| `gcp-cloud-cdn` | GCP Cloud CDN | CDN with signed URLs | | |

## Cloud — Azure (10) { #cloud-azure-10 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `azure-service-bus` | Azure Service Bus | Enterprise messaging | `@azure/service-bus` `@azure/identity` | |
| `azure-key-vault` | Azure Key Vault | Secret and key management | `@azure/keyvault-secrets` `@azure/identity` | |
| `azure-blob-storage` | Azure Blob Storage | Object storage | `@azure/storage-blob` `@azure/identity` | |
| `azure-functions` | Azure Functions | Serverless workloads | `@azure/functions` | |
| `azure-entra-id` | Azure Entra ID | Entra ID (Azure AD) auth | `@azure/msal-node` `@azure/identity` `jsonwebtoken` `jwks-rsa` | `@types/jsonwebtoken` |
| `azure-app-insights` | Azure Application Insights | Telemetry and monitoring | `applicationinsights` | |
| `azure-cosmos-db` | Azure Cosmos DB | Cosmos DB NoSQL database | `@azure/cosmos` `@azure/identity` | |
| `azure-sql-database` | Azure SQL Database | Managed SQL via TypeORM | `@nestjs/typeorm` `typeorm` `mssql` | |
| `azure-cache` | Azure Cache for Redis | Managed Redis caching | `ioredis` | |
| `azure-front-door` | Azure Front Door | CDN and global load balancer | | |

## Docs Site (1) { #docs-site-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `docs-site` | Documentation Site | VitePress-powered docs site | | `vitepress` |

## Testing (1) { #testing-1 }

| ID | Name | Description | Dependencies | Dev Dependencies |
| --- | --- | --- | --- | --- |
| `load-testing` | Load Testing (k6) | Performance testing with Grafana k6 | | |
