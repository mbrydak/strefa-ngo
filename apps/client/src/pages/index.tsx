import type { User } from '@sn/models';
import { Box, Button, ThemeProvider } from '@sn/ui-kit';

import { SERVER_URL } from './constants';

type IndexPageProps = {
  user: User;
};

const IndexPage = ({ user }: IndexPageProps) => (
  <ThemeProvider>
    <Box as="h1" color="warning.main">
      Hello {user.fullName}
    </Box>
    <Button color="primary">Hello UI Kit</Button>
  </ThemeProvider>
);

export async function getServerSideProps() {
  const res = await fetch(SERVER_URL);
  const data: User = await res.json();

  return {
    props: { user: data },
  };
}

export default IndexPage;
