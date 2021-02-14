import { build, fake, sequence } from '@jackfranklin/test-data-bot';

export type User = {
  id: number;
  fullName: string;
  isAccountConfirmed: boolean;
};

export const userBuilder = build<User>('User', {
  fields: {
    id: sequence(),
    fullName: fake((f) => f.name.findName()),
    isAccountConfirmed: fake((f) => f.random.boolean()),
  },
});
