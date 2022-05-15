import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from '../user.entity';
import { RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  private register(@Body() body: RegisterDto): Promise<UserEntity | never> {
    return this.service.register(body);
  }
}
