import { NestFactory } from '@nestjs/core';

export const createServer = async <MainModule>(mainModule: MainModule) => {
  const server = await NestFactory.create(mainModule);

  return server;
};
