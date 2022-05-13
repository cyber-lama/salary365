import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';
import { UserTypeResponse } from './types/userTypeResponse';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async doUserRegistration(
    @Body() userRegister: UserRegisterRequestDto,
  ): Promise<UserTypeResponse> {
    return await this.userService.doUserRegistration(userRegister);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserTypeResponse> {
    return await this.userService.getUserById(id);
  }
}
