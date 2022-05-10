import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { UserType } from './types/user.type';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiCreatedResponse({
    description: 'Объект созданного пользователя является ответом',
    type: UserEntity,
  })
  @ApiBadRequestResponse({
    description: 'Возвращается массив объектов ошибок',
  })
  async doUserRegistration(
    @Body() userRegister: UserRegisterRequestDto,
  ): Promise<UserType> {
    const user = await this.userService.doUserRegistration(userRegister);
    return this.userService.buildUserResponse(user);
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserType> {
    const user = await this.userService.getUserById(id);
    return this.userService.buildUserResponse(user);
  }
}
