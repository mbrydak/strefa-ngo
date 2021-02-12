import React, { createRef } from 'react';
import { screen } from '@testing-library/react';

import { render } from '../testing';
import { Box } from './Box';

describe('Box', () => {
  it('renders without crash', () => {
    render(<Box data-testid="box" />);

    const box = screen.getByTestId('box');

    expect(box).toBeInTheDocument();
    expect(box).toMatchInlineSnapshot(`
      <div
        class="emotion-0"
        data-testid="box"
      />
    `);
  });

  it('allows to customize rendered element', () => {
    const { container, rerender } = render(<Box as="a" />);

    let box: Element | null = container.querySelector('a');

    expect(box).toBeInTheDocument();

    rerender(<Box as="h1" />);

    box = container.querySelector('h1');

    expect(box).toBeInTheDocument();
  });

  it('allows to pass a reference to the rendered component', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Box ref={ref} />);

    expect(ref.current).toBeInTheDocument();
  });

  it('allows to pass styles as props', () => {
    render(<Box data-testid="box" m={2} pt={4} background="primary.main" />);

    const box = screen.getByTestId('box');

    expect(box).toHaveStyleRule('margin', '16px');
    expect(box).toHaveStyleRule('padding-top', '32px');
    expect(box).toHaveStyleRule('background', 'primary.main');
  });
});
