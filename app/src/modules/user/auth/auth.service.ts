import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthHelper } from './auth.helper';
import { UserEntity } from '../entities/user.entity';
import { RegisterDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';
import { RefreshTokenEntity } from '../entities/refresh-token.entity';
import { AccessTokenEntity } from '../entities/access-token.entity';
import { IUserResponse } from './types/user-register-response.interface';

@Injectable()
export class AuthService {
  @InjectRepository(UserEntity)
  private readonly userRepository: Repository<UserEntity>;
  @InjectRepository(RefreshTokenEntity)
  private readonly refreshTokenRepository: Repository<RefreshTokenEntity>;
  @InjectRepository(AccessTokenEntity)
  private readonly accessTokenRepository: Repository<AccessTokenEntity>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  public async register(body: RegisterDto): Promise<IUserResponse | never> {
    // look at the uniqueness of the mail and phone number
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

    // generate tokens by id and email fields
    const generatedTokens = await this.helper.generateToken(user);
    const { access_token, refresh_token } = generatedTokens;

    // save refresh token to db
    let newRefreshToken = new RefreshTokenEntity();
    newRefreshToken.token = refresh_token;
    newRefreshToken.user_id = user.id;
    newRefreshToken.last_used_at = new Date();
    newRefreshToken = await this.refreshTokenRepository.save(newRefreshToken);
    // let t = await this.refreshTokenRepository.findOne({ relations: ['user'] });
    // t.user.phone = '77778888';
    // await this.refreshTokenRepository.save(t);

    // save access token to db
    const newAccessToken = new AccessTokenEntity();
    newAccessToken.token = access_token;
    newAccessToken.refresh_token_id = newRefreshToken.id;
    newAccessToken.last_used_at = new Date();
    await this.accessTokenRepository.save(newAccessToken);

    return {
      user: {
        ...user,
        ...generatedTokens,
      },
    };
  }

  public async refresh(user: UserEntity): Promise<Tokens> {
    await this.userRepository.update(user.id, { last_login_at: new Date() });

    return this.helper.generateToken(user);
  }
}
