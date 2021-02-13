import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Rule = Record<string, number | any[]>;

type Args = {
  env?: { node?: boolean; browser?: boolean; 'cypress/globals'?: boolean };
  dirname: string;
  tsConfigFile: string;
  jsx?: boolean;
  rules?: Rule;
  plugins?: string[];
  extends?: string[];
};

const baseConfig = {
  root: true,
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jest',
    'jest-dom',
    'prettier',
    'simple-import-sort',
    'testing-library',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    complexity: [2, 11], // prevent from writing too complex functions
    'sort-imports': 0, // turned of as we're using simple-import-sort for sorting
    'spaced-comment': [2, 'always', { markers: ['/'] }], // modified to allow TS references with triple brackets
    'class-methods-use-this': 0, // sometimes we're using classes only to describe a shape of the object (e.g. DTOs, validators).
    '@typescript-eslint/explicit-module-boundary-types': 0, // in many cases TS knows return type of the function so don't require to always specify it explicitly
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }], // allow to declare unused vars with _ prefix
    '@typescript-eslint/array-type': 2, // each array type should be written as type[]
    '@typescript-eslint/prefer-enum-initializers': 2, // enum values should be always specified explicitly
    'import/order': 0, // turned of as we're using simple-import-sort for sorting
    'import/prefer-default-export': 0, // we're using default exports only for pages
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'], // side effect imports.
          ['^(react|@nestjs)', '^@?\\w'], // packages from node_modules. `react`/nest related packages come first.
          ['^[^.]'], // absolute imports (mostly written as `@/foo`). Anything that does not start with a dot.
          ['^\\.'], // relative imports. Anything that starts with a dot.
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/destructuring-assignment': 0, // allow to destructure only a part of the props
        'react/jsx-props-no-spreading': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.test.(ts|tsx)', '*.stories.tsx', 'setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['*.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};

type BaseConfig = typeof baseConfig;

type Config = BaseConfig & {
  parserOptions: BaseConfig['parserOptions'] & { project?: string; ecmaFeatures?: { jsx?: boolean } };
  settings: BaseConfig['settings'] & {
    'import/resolver': {
      node: { paths?: string[] };
      typescript?: { project: string };
    };
  };
};

export const createEslintConfig = (args: Args) => {
  const config: Config = { ...baseConfig };
  const configPath = path.resolve(args.dirname, args.tsConfigFile);

  config.parserOptions.project = configPath;
  config.settings['import/resolver'].node.paths = ['src'];
  config.settings['import/resolver'].typescript = {
    project: configPath,
  };

  if (args.jsx) {
    config.parserOptions.ecmaFeatures = { jsx: true };
  }

  if (args.env) {
    config.env = { ...config.env, ...args.env };
  }

  if (args.rules) {
    config.rules = { ...config.rules, ...args.rules };
  }

  if (args.plugins) {
    config.plugins = [...config.plugins, ...args.plugins];
  }

  if (args.extends) {
    config.extends = [...config.extends, ...args.extends];
  }

  return config;
};
