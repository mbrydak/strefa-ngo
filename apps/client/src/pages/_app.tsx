import type { AppProps } from 'next/app';

import { startMockServer } from '@sn/api';
import { IS_MSW_ENABLED } from '@sn/env/universal';
import { ThemeProvider } from '@sn/ui-kit';

if (IS_MSW_ENABLED) {
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
