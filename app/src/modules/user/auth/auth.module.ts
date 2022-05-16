import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthHelper } from './auth.helper';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt-strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh-strategy';
import { AccessTokenEntity } from '../entities/access-token.entity';
import { RefreshTokenEntity } from '../entities/refresh-token.entity';

@Module({
  imports: [
    PassportModule.register({}),
    JwtModule.register({}),
    TypeOrmModule.forFeature([
      UserEntity,
      RefreshTokenEntity,
      AccessTokenEntity,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthHelper, JwtStrategy, JwtRefreshStrategy],
  exports: [JwtStrategy, JwtRefreshStrategy, PassportModule],
})
export class AuthModule {}
