import {
  Column,
  CreateDateColumn,
  Entity,
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  last_used_at: Date;

  // @ManyToOne(() => RefreshTokenEntity, (token) => token.id)
  // refresh_token_id: RefreshTokenEntity;
}
