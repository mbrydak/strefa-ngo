import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from './handlers';

export const startMockServer = () => {
  if (typeof window === 'undefined') {
    setupServer(...handlers).listen();
  } else {
    setupWorker(...handlers).start();
  }
};
