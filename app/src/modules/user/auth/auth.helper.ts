import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Tokens } from './types/tokens.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthHelper {
  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;
  private readonly jwt: JwtService;
  private readonly config: ConfigService;

  constructor(jwt: JwtService, conf: ConfigService) {
    this.jwt = jwt;
    this.config = conf;
  }

  // Decoding the JWT Token
  public async decode(token: string): Promise<unknown> {
    return this.jwt.decode(token, null);
  }

  // Get User by User ID we get from decode()
  public async validateUser(decoded: any): Promise<UserEntity> {
    return this.repository.findOne(decoded.id);
  }

  // Generate JWT Token
  public async generateToken(user: UserEntity): Promise<Tokens> {
    const { id, email } = user;
    const [at, rt] = await Promise.all([
      this.jwt.signAsync(
        { id, email },
        {
          secret: this.config.get<string>('AT_SECRET'),
          expiresIn: this.config.get<string>('AT_SECRET_EXPIRES_IN'),
        },
      ),
      this.jwt.signAsync(
        { id, email },
        {
          secret: this.config.get<string>('RT_SECRET'),
          expiresIn: this.config.get<string>('RT_SECRET_EXPIRES_IN'),
        },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
