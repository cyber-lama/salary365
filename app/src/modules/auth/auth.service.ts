import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { UserTypeResponse } from '../user/types/userTypeResponse';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<UserTypeResponse> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) return null;

    const isPasswordCorrect = await compare(pass, user.password);

    if (!isPasswordCorrect) {
      return null;
    }
    return this.userService.buildUserResponse(user);
  }
}
