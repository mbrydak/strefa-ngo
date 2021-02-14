import { rest } from 'msw';

import { userBuilder } from '@sn/models';
import type { AsyncReturnType } from '@sn/types';

import type { GetUser } from './getUser';

const result = userBuilder();

export const getUserHandler = rest.get('http://localhost:4000/', (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json<AsyncReturnType<GetUser>>(result));
});
