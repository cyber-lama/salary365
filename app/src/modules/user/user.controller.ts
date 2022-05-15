import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }
}
