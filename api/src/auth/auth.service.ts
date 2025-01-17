import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }
  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<Omit<User, 'password'>> {
    const { fullName, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ where: { fullName } });

    if (user && password === user.password) {
      return { id: user.id, fullName: user.fullName };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
