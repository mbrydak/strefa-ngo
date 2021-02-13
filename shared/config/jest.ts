import type { Config } from '@jest/types';

export const generalConfig: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export const frontendConfig: Config.InitialOptions = {
  ...generalConfig,
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['./setupTests.ts'],
};
