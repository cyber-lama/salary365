import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';
import { UserEntity } from '../entities/user.entity';
import { RegisterDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';
import { RefreshTokenEntity } from '../entities/refresh-token.entity';
import { AccessTokenEntity } from '../entities/access-token.entity';

@Injectable()
export class AuthService {
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>;
  @InjectRepository(RefreshTokenEntity)
  private readonly RTRepository: Repository<RefreshTokenEntity>;
  @InjectRepository(UserEntity)
  private readonly ATRepository: Repository<AccessTokenEntity>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterDto): Promise<UserEntity | never> {
    const { email, phone, employer, snils }: RegisterDto = body;
    let user: UserEntity = await this.userRepository.findOne({
      where: { email },
    });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }
    user = await this.userRepository.findOne({ where: { phone } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new UserEntity();
    user.email = email;
    user.phone = phone;
    user.employer = employer;
    user.snils = snils;

    user = await this.userRepository.save(user);

    const tokens = await this.helper.generateToken(user);
    const { access_token, refresh_token } = tokens;

    let refreshToken = new RefreshTokenEntity();
    refreshToken.token = refresh_token;
    refreshToken.user_id = user.id;
    //refreshToken.user = user;
    // refreshToken = await this.RTRepository.save(refreshToken);
    refreshToken = await this.RTRepository.save(refreshToken);
    // console.log(refreshToken);

    let t = await this.RTRepository.findOne({ relations: ['user'] });

    t.user.phone = '77778888';
    await this.RTRepository.save(t);

    return user;
  }

  public async refresh(user: UserEntity): Promise<Tokens> {
    await this.userRepository.update(user.id, { last_login_at: new Date() });

    return this.helper.generateToken(user);
  }
}
