import type { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

export const applyGlobalMiddleware = (server: INestApplication) => {
  server.use(helmet());

  return server;
};
