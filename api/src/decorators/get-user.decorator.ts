import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/auth/user.entity';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
