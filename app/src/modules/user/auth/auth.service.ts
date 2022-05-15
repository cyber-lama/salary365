import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthHelper } from './auth.helper';
import { UserEntity } from '../user.entity';
import { UserNotFoundException } from '../../../common/exceptions/user-not-found.exception';

@Injectable()
export class AuthService {
  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterDto): Promise<UserEntity | never> {
    const { email, phone, employer, snils }: RegisterDto = body;
    let user: UserEntity = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    user = await this.repository.findOne({ where: { phone } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new UserEntity();
    user.email = email;
    user.phone = phone;
    user.employer = employer;
    user.snils = snils;

    return await this.repository.save(user);
  }

  public async login(body: LoginDto): Promise<string | never> {
    const { phone }: LoginDto = body;
    const user: UserEntity = await this.repository.findOne({
      where: { phone },
    });

    if (!user) {
      throw new UserNotFoundException();
    }

    await this.repository.update(user.id, { last_login_at: new Date() });

    return this.helper.generateToken(user);
  }

  public async refresh(user: UserEntity): Promise<string> {
    await this.repository.update(user.id, { last_login_at: new Date() });

    return this.helper.generateToken(user);
  }
}
