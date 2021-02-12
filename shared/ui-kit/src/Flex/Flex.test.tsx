import React, { createRef } from 'react';
import { screen } from '@testing-library/react';

import { render } from '../testing';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders flexbox component without crash', () => {
    render(<Flex data-testid="flex" />);

    const flex = screen.getByTestId('flex');

    expect(flex).toBeInTheDocument();
    expect(flex).toHaveStyleRule('display', 'flex');
    expect(flex).toMatchInlineSnapshot(`
      .emotion-0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .emotion-0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      <div
        class="emotion-0"
        data-testid="flex"
      />
    `);
  });

  it('allows to customize rendered element', () => {
    const { container, rerender } = render(<Flex as="a" />);

    let flex: Element | null = container.querySelector('a');

    expect(flex).toBeInTheDocument();

    rerender(<Flex as="h1" />);

    flex = container.querySelector('h1');

    expect(flex).toBeInTheDocument();
  });

  it('allows to pass a reference to the rendered component', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Flex ref={ref} />);

    expect(ref.current).toBeInTheDocument();
  });

  it('allows to pass flex properties as props', () => {
    render(<Flex data-testid="flex" justify="center" align="flex-end" direction="column" />);

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyleRule('justify-content', 'center');
    expect(flex).toHaveStyleRule('align-items', 'flex-end');
    expect(flex).toHaveStyleRule('flex-direction', 'column');
  });
});
