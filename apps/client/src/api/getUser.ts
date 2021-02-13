import type { GetUser } from '@sn/models';

import type { ApiCall } from '@/types';

import api from './api';

export const getUser: ApiCall<GetUser> = () => {
  return api.get('/');
};
