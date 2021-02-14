import type { AppProps } from 'next/app';

import { startMockServer } from '@sn/api';
import { ThemeProvider } from '@sn/ui-kit';

startMockServer();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
