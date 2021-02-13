import type { Config } from '@jest/types';

type Options = {
  type: 'client' | 'server';
  tsconfig?: string;
};

type JestConfig = Config.InitialOptions;

const baseConfig: JestConfig = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

const clientConfig: JestConfig = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  setupFilesAfterEnv: ['./setupTests.ts'],
};

const serverConfig: JestConfig = {
  testEnvironment: 'node',
};

export const createJestConfig = ({ type, tsconfig = 'tsconfig.json' }: Options): JestConfig => ({
  ...baseConfig,
  ...(type === 'client' ? clientConfig : serverConfig),
  globals: {
    'ts-jest': {
      tsconfig,
      isolatedModules: true,
    },
  },
})