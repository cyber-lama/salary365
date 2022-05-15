import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';
import { UserEntity } from '../user.entity';
import { RegisterDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';

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

    user = await this.repository.save(user);
    const tokens = await this.helper.generateToken(user);
    const decodeTokens = this.helper.decode(tokens.access_token);
    console.log(tokens, decodeTokens);
    return user;
  }

  public async refresh(user: UserEntity): Promise<Tokens> {
    await this.repository.update(user.id, { last_login_at: new Date() });

    return this.helper.generateToken(user);
  }
}
