import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req, @Body() loginDto: LoginDto): Promise<any> {
    return req.user;
  }
}
