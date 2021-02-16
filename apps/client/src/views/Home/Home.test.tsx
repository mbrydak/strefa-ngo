import React from 'react';

import { userBuilder } from '@sn/models';

import { render, screen } from '@/testing/render';

import { getHomeServerSideProps, Home } from './Home';

const user = userBuilder();

describe('Index page', () => {
  it("displays welcome message containing user's full name", () => {
    render(<Home user={user} />);

    expect(screen.getByText(`Hello ${user.fullName}`)).toBeInTheDocument();
  });

  it('displays welcome button', () => {
    render(<Home user={user} />);

    expect(screen.getByRole('button', { name: 'Hello UI Kit' })).toBeInTheDocument();
  });

  it('receives correct user object from `getServerSideProps`', async () => {
    const { props } = await getHomeServerSideProps();

    expect(typeof props.user.id).toBe('number');
    expect(typeof props.user.fullName).toBe('string');
    expect(typeof props.user.isAccountConfirmed).toBe('boolean');
  });
});