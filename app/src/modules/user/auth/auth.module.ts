import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthHelper } from './auth.helper';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt-strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh-strategy';

@Module({
  imports: [
    PassportModule.register({}),
    JwtModule.register({}),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthHelper, JwtStrategy, JwtRefreshStrategy],
  exports: [JwtStrategy, JwtRefreshStrategy, PassportModule],
})
export class AuthModule {}
