import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { UserTypeResponse } from '../user/types/userTypeResponse';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByName(username);
    if (!user) throw new BadRequestException();

    const isPasswordCorrect = await compare(pass, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
