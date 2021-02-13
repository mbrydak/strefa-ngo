import type { AxiosPromise } from 'axios';

export type PromiseType<AnyPromise extends Promise<unknown>> = AnyPromise extends Promise<infer U> ? U : never;

export type ServerSideProps<GetServerSideProps extends () => Promise<unknown>> = PromiseType<
  ReturnType<GetServerSideProps>
> extends {
  props: infer PropsValue;
}
  ? PropsValue
  : never;

export type ApiCall<RequestFunction extends () => Promise<unknown>> = (
  ...args: Parameters<RequestFunction>
) => AxiosPromise<PromiseType<ReturnType<RequestFunction>>>;
