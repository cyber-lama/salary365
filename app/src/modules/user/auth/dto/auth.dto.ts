import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import {IsSnils} from "../../../../common/decorators/snils.decorator";

export class RegisterDto {
  @IsNotEmpty({
    message: 'Поле «Email» обязательно для заполнения',
  })
  @IsEmail({}, { message: 'Поле «Email» должно быть валидным email' })
  email: string;

  @IsNotEmpty({
    message: 'Поле «Номер телефона» обязательно для заполнения',
  })
  phone: string;

  @IsNotEmpty({
    message: 'Поле «Работодатель» обязательно для заполнения',
  })
  employer: string;

  @Length(11, 11, { message: 'Поле «СНИЛС» должно содержать 11 символов' })
  @IsSnils({
    message: 'Поле «СНИЛС» не валидно',
  })
  snils: string;
}

export class LoginDto {
  @IsNotEmpty({
    message: 'Поле «Номер телефона» обязательно для заполнения',
  })
  public readonly phone: string;
}
