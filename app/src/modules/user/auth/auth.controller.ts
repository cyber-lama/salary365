import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from '../entities/user.entity';
import { RegisterDto } from './dto/auth.dto';
import { Request } from 'express';
import { JwtRefreshTokenGuard } from './guards/jwt-refresh-token.guard';
import { Tokens } from './types/tokens.type';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  private register(@Body() body: RegisterDto): Promise<UserEntity | never> {
    return this.service.register(body);
  }

  @Post('refresh')
  @UseGuards(JwtRefreshTokenGuard)
  private refresh(@Req() request: Request): Promise<Tokens | never> {
    return this.service.refresh(<UserEntity>request?.['user']);
  }
}
