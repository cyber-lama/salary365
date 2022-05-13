import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email пользователя',
    example: 'reachme@amitavroy.com',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'test21',
  })
  @IsNotEmpty()
  password: string;
}
