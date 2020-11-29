import { Box, Button, ThemeProvider } from '@sn/ui-kit';

const IndexPage = () => (
  <ThemeProvider>
    <Box as="h1" color="warning.main">
      Hello Next.js
    </Box>
    <Button color="primary">Hello UI Kit</Button>
  </ThemeProvider>
);

export default IndexPage;
