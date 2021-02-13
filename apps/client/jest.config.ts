import { createJestConfig } from '@sn/config/jest';

export default createJestConfig({
  type: 'client',
  tsconfig: 'tsconfig.test.json',
});
