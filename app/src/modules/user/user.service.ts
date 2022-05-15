import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserNotFoundException } from '../../common/exceptions/user-not-found.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}
  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { id } });
    if (!user) throw new UserNotFoundException();
    return this.repository.findOne({ where: { id } });
  }
}
