import { UserEntity } from '../../entities/user.entity';
import { Tokens } from './tokens.type';

export interface IUserResponse {
  user: UserEntity & Tokens;
}
