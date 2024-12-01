import { Injectable } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class CustomCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    return method === 'GET' ? `${method}:${url}` : undefined;
  }
}

