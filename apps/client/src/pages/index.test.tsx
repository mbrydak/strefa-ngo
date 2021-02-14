import React from 'react';

import { userBuilder } from '@sn/models';

import { render, screen } from '@/testing/render';

import IndexPage, { getServerSideProps } from './index';

const user = userBuilder();

describe('Index page', () => {
  it("displays welcome message containing user's full name", () => {
    render(<IndexPage user={user} />);

    expect(screen.getByText(`Hello ${user.fullName}`)).toBeInTheDocument();
  });

  it('displays welcome button', () => {
    render(<IndexPage user={user} />);

    expect(screen.getByRole('button', { name: 'Hello UI Kit' })).toBeInTheDocument();
  });

  it('receives correct user object from `getServerSideProps`', async () => {
    const { props } = await getServerSideProps();

    expect(typeof props.user.id).toBe('number');
    expect(typeof props.user.fullName).toBe('string');
    expect(typeof props.user.isAccountConfirmed).toBe('boolean');
  });
});
