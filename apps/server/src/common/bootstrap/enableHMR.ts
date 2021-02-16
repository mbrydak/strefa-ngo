import type { INestApplication } from '@nestjs/common';

export const enableHMR = (server: INestApplication) => {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
};
