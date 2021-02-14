import { getUser } from '@sn/api';
import { Box, Button } from '@sn/ui-kit';

import type { ServerSideProps } from '@/types';

type IndexPageProps = ServerSideProps<typeof getServerSideProps>;

const IndexPage = ({ user }: IndexPageProps) => (
  <>
    <Box as="h1" color="warning.main">
      Hello {user.fullName}
    </Box>
    <Button color="primary">Hello UI Kit</Button>
  </>
);

export const getServerSideProps = async () => {
  const { data: user } = await getUser();

  return {
    props: { user },
  };
};

export default IndexPage;
