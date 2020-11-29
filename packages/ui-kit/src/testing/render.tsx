import React, { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render as renderer, RenderOptions } from '@testing-library/react';

import { theme } from '../styles/theme/theme';

export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  const element = <ThemeProvider theme={theme}>{ui}</ThemeProvider>;

  return renderer(element, options);
};
