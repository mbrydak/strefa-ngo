import type { Config } from '@jest/types';
import { generalConfig } from '@sn/config/jest';

const config: Config.InitialOptions = {
  ...generalConfig,
  testEnvironment: 'node',
};

export default config;
