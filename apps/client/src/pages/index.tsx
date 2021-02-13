import { Box, Button, ThemeProvider } from '@sn/ui-kit';

import { getUser } from '@/api/getUser';
import type { ServerSideProps } from '@/types';

type IndexPageProps = ServerSideProps<typeof getServerSideProps>;

const IndexPage = ({ user }: IndexPageProps) => (
  <ThemeProvider>
    <Box as="h1" color="warning.main">
      Hello {user.fullName}
    </Box>
    <Button color="primary">Hello UI Kit</Button>
  </ThemeProvider>
);

export const getServerSideProps = async () => {
  const { data: user } = await getUser();

  return {
    props: { user },
  };
};

export default IndexPage;
