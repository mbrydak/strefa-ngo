import useTranslation from 'next-translate/useTranslation';

import { getUser } from '@sn/api';
import { Box, Button } from '@sn/ui-kit';

import type { ServerSideProps } from '@/types';

type HomeProps = ServerSideProps<typeof getHomeServerSideProps>;

export const Home = ({ user }: HomeProps) => {
  const { t: commonT } = useTranslation('common');
  const { t: homeT } = useTranslation('home');

  return (
    <>
      <Box as="h1" color="warning.main">
        {commonT('hello')} {user.fullName}
      </Box>
      <Button color="primary">{homeT('clickMe')}</Button>
    </>
  );
};

export const getHomeServerSideProps = async () => {
  const { data: user } = await getUser();

  return {
    props: { user },
  };
};
