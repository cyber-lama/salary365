import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserRoles } from '../enums/user.enum';
import { RefreshTokenEntity } from './refresh-token.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    unique: true,
    nullable: false,
  })
  phone: string;

  @Column()
  employer: string;

  @Column()
  snils: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  last_login_at: Date;

  @OneToMany(() => RefreshTokenEntity, (token) => token.user)
  tokens: RefreshTokenEntity[];
}
