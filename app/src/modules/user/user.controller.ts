import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { JwtAuthenticationGuard } from './auth/guards/jwt-authentication.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }
}
