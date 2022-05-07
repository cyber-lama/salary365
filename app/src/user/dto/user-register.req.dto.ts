import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Match } from '../../decorators/match.decorator';

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Петр Ян',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email пользователя',
    example: 'petr.yn@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'tipira21',
  })
  @IsNotEmpty()
  @Length(8, 24)
  password: string;

  @ApiProperty({
    description: 'Подтвердить пароль',
    example: 'tipira21',
  })
  @Match(UserRegisterRequestDto, (s) => s.password)
  @IsNotEmpty()
  @Length(8, 24)
  confirm: string;
}
