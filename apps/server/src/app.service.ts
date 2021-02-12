import { Injectable } from '@nestjs/common';
import type { User } from '@sn/models';

@Injectable()
export class AppService {
  getUser(): Promise<User> {
    return Promise.resolve({
      id: 1,
      fullName: 'John Doe',
      isAccountConfirmed: true,
    });
  }
}
