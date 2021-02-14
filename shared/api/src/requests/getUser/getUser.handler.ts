import { userBuilder } from '@sn/models';
import { rest } from 'msw';

import type { ApiCallResult } from '../../types';
import type { GetUser } from './getUser';

const result = userBuilder();

export const getUserHandler = rest.get('http://localhost:4000/', (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json<ApiCallResult<GetUser>>(result));
});
