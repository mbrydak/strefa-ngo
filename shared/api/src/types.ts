import type { AxiosPromise } from 'axios';
import type { PromiseValue } from 'type-fest';

export type ApiCallResult<RequestFunction extends () => Promise<unknown>> = PromiseValue<ReturnType<RequestFunction>>;

export type AxiosApiCall<RequestFunction extends () => Promise<unknown>> = (
  ...args: Parameters<RequestFunction>
) => AxiosPromise<ApiCallResult<RequestFunction>>;
