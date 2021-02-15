import type { AppController } from '@sn/server/src/app.controller';
import { AsyncReturnType } from '@sn/types';

import { createRequest } from '../../utils';

export type GetUserResponseData = AsyncReturnType<AppController['getUser']>;

export const getUser = () => {
  return createRequest('get')<GetUserResponseData>('/');
};
