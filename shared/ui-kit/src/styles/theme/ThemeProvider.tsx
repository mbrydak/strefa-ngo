import React, { FC } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { theme } from './theme';

export const ThemeProvider: FC = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
