import type { AppController } from '@sn/server/src/app.controller';

export type User = {
  id: number;
  fullName: string;
  isAccountConfirmed: boolean;
};

export type GetUser = AppController['getUser'];
