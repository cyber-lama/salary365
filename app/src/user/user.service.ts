import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './types/user.type';

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
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;

    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user)
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    return this.userRepository.findOne({ where: { id } });
  }

  buildUserResponse(user: UserEntity): UserType {
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return user;
  }
}
