import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './configs/typeorm.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/user/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
    AuthModule,
  ],
  // format response before sending
  // providers: [
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: TransformInterceptor,
  //   },
  // ],
})
export class AppModule {}
