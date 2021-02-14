import type { AsyncFunction, AsyncReturnType, GetProperty } from '@sn/types';

export type ServerSideProps<GetServerSideProps extends AsyncFunction> = GetProperty<
  AsyncReturnType<GetServerSideProps>,
  'props'
>;
