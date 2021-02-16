import dotenv from 'dotenv';
import { resolve } from 'path';

type NodeEnv = 'development' | 'test' | 'production';

export const createServerEnvironment = () => {
  dotenv.config({ path: resolve(__dirname, '../../../.env') });

  const envVars = {
    SERVER_URL: process.env.SERVER_URL,
    SERVER_PORT: Number(process.env.SERVER_PORT),
    NODE_ENV: process.env.NODE_ENV as NodeEnv,
  };

  return <Key extends keyof typeof envVars>(key: Key): typeof envVars[Key] => envVars[key];
};
