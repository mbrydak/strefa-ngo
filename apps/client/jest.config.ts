import type { Config } from '@jest/types';
import { frontendConfig } from '@sn/config/jest';

const config: Config.InitialOptions = {
  ...frontendConfig,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};

export default config;
