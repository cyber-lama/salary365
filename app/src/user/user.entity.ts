import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from './enums/user.enum';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: 'Primary key as User ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Имя пользователя', example: 'Петр Ян' })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Email пользователя',
    example: 'petr.yn@gmail.com',
  })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({ description: 'Хешированный пароль' })
  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @ApiProperty({ description: 'Когда пользователь был создан' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Когда данные пользователя были обновлены' })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
