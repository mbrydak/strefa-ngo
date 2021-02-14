import type { AppController } from '@sn/server/src/app.controller';

import type { AxiosApiCall } from '../../types';
import { api } from '../../utils';

export type GetUser = AppController['getUser'];

export const getUser: AxiosApiCall<GetUser> = () => {
  return api.get('/');
};
