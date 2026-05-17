import { Controller, Get, Header, Inject } from '@nestjs/common';
import { Registry } from 'prom-client';

// WARNING: The /metrics endpoint exposes internal runtime data.
// In production, protect this endpoint with a guard or network-level restrictions.
@Controller('metrics')
export class MetricsController {
  constructor(@Inject('PROM_REGISTRY') private readonly registry: Registry) {}

  @Get()
  @Header('Content-Type', 'text/plain; version=0.0.4; charset=utf-8')
  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
