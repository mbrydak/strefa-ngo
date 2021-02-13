import type { Config } from '@jest/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import type { CompilerOptions } from 'typescript';

type JestConfig = Config.InitialOptions;

type Options = {
  /**
   * Adapts returned config to client or server environment
   */
  type: 'client' | 'server';

  /**
   * Name of the file with TypeScript configuration used for testing.
   * @default 'tsconfig.json'
   */
  tsconfig?: string;

  /**
   * `compilerOptions` object from the tsconfig file.
   * Provide if you want to resolve custom TS paths.
   */
  compilerOptions?: {
    baseUrl: CompilerOptions['baseUrl'];
    paths: Record<string, string[]>;
  };
};

const baseConfig: JestConfig = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
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

export const createJestConfig = ({ type, compilerOptions, tsconfig = 'tsconfig.json' }: Options): JestConfig => ({
  ...baseConfig,
  ...(type === 'client' ? clientConfig : serverConfig),
  ...(compilerOptions
    ? {
        moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
          prefix: `<rootDir>/${compilerOptions.baseUrl}`,
        }),
      }
    : {}),
  globals: {
    'ts-jest': {
      tsconfig,
      isolatedModules: true,
    },
  },
});
