import type { PromiseValue } from 'type-fest';

export type ServerSideProps<GetServerSideProps extends () => Promise<unknown>> = PromiseValue<
  ReturnType<GetServerSideProps>
> extends {
  props: infer PropsValue;
}
  ? PropsValue
  : never;
