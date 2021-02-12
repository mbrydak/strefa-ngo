import React from 'react';
import type { User } from '@sn/models';
import { render, screen } from '@testing-library/react';

import IndexPage from './index';

const user: User = {
  id: 2,
  fullName: 'James Doe',
  isAccountConfirmed: false,
};

describe('Index page', () => {
  it("displays welcome message containing user's full name", () => {
    render(<IndexPage user={user} />);

    expect(screen.getByText(`Hello ${user.fullName}`)).toBeInTheDocument();
  });

  it('displays welcome button', () => {
    render(<IndexPage user={user} />);

    expect(screen.getByRole('button', { name: 'Hello UI Kit' })).toBeInTheDocument();
  });
});
