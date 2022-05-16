import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from './user.entity';
import { AccessTokenEntity } from './access-token.entity';

@Entity({ name: 'refresh_tokens' })
export class RefreshTokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  last_used_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.tokens, {
    cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  // @OneToMany(() => AccessTokenEntity, (token) => token.refresh_token_id)
  // tokens: AccessTokenEntity[];
}
