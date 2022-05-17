import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RefreshTokenEntity } from './refresh-token.entity';

@Entity({ name: 'access_tokens' })
export class AccessTokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  refresh_token_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  last_used_at: Date;

  @ManyToOne(() => RefreshTokenEntity, (token) => token.tokens, {
    cascade: true,
  })
  @JoinColumn({ name: 'refresh_token_id' })
  refreshToken: RefreshTokenEntity;
}
