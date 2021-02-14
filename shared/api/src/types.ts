import type { AxiosPromise } from 'axios';

import type { AsyncFunction, AsyncReturnType, SetReturnType } from '@sn/types';

export type AxiosApiCall<RequestFunction extends AsyncFunction> = SetReturnType<
  RequestFunction,
  AxiosPromise<AsyncReturnType<RequestFunction>>
>;
