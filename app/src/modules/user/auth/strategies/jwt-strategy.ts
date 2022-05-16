import { Inject, Injectable } from '@nestjs/common';
import { AuthHelper } from '../auth.helper';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../../entities/user.entity';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  constructor(@Inject(ConfigService) config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('AT_SECRET'),
      ignoreExpiration: false,
    });
  }

  private validate(payload: string): Promise<UserEntity | never> {
    return this.helper.validateUser(payload);
  }
}
