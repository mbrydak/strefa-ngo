import { userBuilder } from '@sn/models';

import { createHandler } from '../../utils';
import type { GetUserResponseData } from './getUser';

const result = userBuilder();

export const getUserHandler = createHandler('get')('/', (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json<GetUserResponseData>(result));
});
