import type { INestApplication } from '@nestjs/common';

import { getEnvVar } from '../env';

const logServerUrl = async (server: INestApplication) => {
  let url = await server.getUrl();
  url = url.replace('[::1]', 'localhost');

  console.info(`App is listening on: ${url}`);
};

export const runServer = async (server: INestApplication) => {
  await server.listen(getEnvVar('SERVER_PORT'));
  await logServerUrl(server);

  return server;
};
