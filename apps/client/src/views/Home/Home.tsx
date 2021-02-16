import { getUser } from '@sn/api';
import { Box, Button } from '@sn/ui-kit';

import type { ServerSideProps } from '@/types';

type HomeProps = ServerSideProps<typeof getHomeServerSideProps>;

export const Home = ({ user }: HomeProps) => (
  <>
    <Box as="h1" color="warning.main">
      Hello {user.fullName}
    </Box>
    <Button color="primary">Hello UI Kit</Button>
  </>
);

export const getHomeServerSideProps = async () => {
  const { data: user } = await getUser();

  return {
    props: { user },
  };
};
