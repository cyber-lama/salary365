import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body() userRegister: UserRegisterRequestDto,
  ): Promise<UserEntity> {
    return await this.userService.doUserRegistration(userRegister);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }
}
