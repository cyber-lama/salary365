import { UserEntity } from '../user.entity';

export type UserTypeResponse = Omit<UserEntity, 'setPassword' | 'password'>;
