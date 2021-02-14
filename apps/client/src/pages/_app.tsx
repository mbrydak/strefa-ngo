import type { AppProps } from 'next/app';

import { startMockServer } from '@sn/api';
import { ThemeProvider } from '@sn/ui-kit';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  startMockServer();
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
