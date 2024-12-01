
import { Module} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';



@Module({
  imports: [
    CacheModule.register({ ttl: 5 }),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
