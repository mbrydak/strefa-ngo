import { createJestConfig } from '@sn/config';

import { compilerOptions } from './tsconfig.json';

export default createJestConfig({
  type: 'client',
  tsconfig: 'tsconfig.test.json',
  compilerOptions,
});
