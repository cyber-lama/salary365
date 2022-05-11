import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import {Match} from "../../../common/decorators/match.decorator";

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Петр Ян',
  })
  @IsNotEmpty({ message: 'Поле «ФИО» обязательно для заполнения'})
  name: string;

  @ApiProperty({
    description: 'Email пользователя',
    example: 'petr.yn@gmail.com',
  })
  @IsNotEmpty({
    message: 'Поле «Email» обязательно для заполнения',
    groups: ['test'],
  })
  @IsEmail(
    {},
    { message: 'Поле «Email» должно быть валидным email', groups: ['test'] },
  )
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: 'tipira21',
  })
  @IsNotEmpty({ message: 'Поле «Пароль» обязательно для заполнения' })
  @Length(8, 24, {
    message: 'Поле «Пароль» должно быть не меньше 8 и не больше 24 символов',
  })
  password: string;

  @ApiProperty({
    description: 'Подтвердить пароль',
    example: 'tipira21',
  })
  @Match<UserRegisterRequestDto>('password', {
    message: 'Поле «Подтвердите пароль» должно совпадать с полем «Пароль»',
  })
  @IsNotEmpty({
    message: 'Поле «Подтвердите пароль» обязательно для заполнения',
  })
  confirm: string;
}
