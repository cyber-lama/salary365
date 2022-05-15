import { Inject, Injectable } from '@nestjs/common';
import { AuthHelper } from '../auth.helper';
import { ConfigService } from '@nestjs/config';
import { UserEntity } from '../../user.entity';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  constructor(@Inject(ConfigService) config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('RT_SECRET'),
      ignoreExpiration: false,
    });
  }

  private validate(payload: string): Promise<UserEntity | never> {
    return this.helper.validateUser(payload);
  }
}
