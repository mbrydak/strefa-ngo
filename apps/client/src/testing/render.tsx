import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from '@sn/ui-kit';

const wrapper: RenderOptions['wrapper'] = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries' | 'wrapper'>) => {
  return render(ui, { ...options, wrapper });
};

export * from '@testing-library/react';

export { customRender as render };
