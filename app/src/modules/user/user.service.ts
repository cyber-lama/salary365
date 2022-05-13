import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeResponse } from './types/userTypeResponse';
import { UserNotFoundException } from '../../common/exceptions/user-not-found.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<UserEntity> {
    const user = new UserEntity();
    user.email = userRegister.email;
    user.phone = userRegister.phone;
    user.employer = userRegister.employer;
    user.snils = userRegister.snils;

    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
  async getUserByPhone(phone: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      phone: phone,
    });
  }
  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new UserNotFoundException();
    return this.userRepository.findOne({ where: { id } });
  }

  buildUserResponse(user: UserEntity): UserTypeResponse {
    // const copyUser = { ...user };
    // delete copyUser.password;
    return user;
  }
}
