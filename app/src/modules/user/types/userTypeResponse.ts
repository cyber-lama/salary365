import { UserEntity } from '../entities/user.entity';

export type UserTypeResponse = Omit<UserEntity, 'setPassword' | 'password'>;
