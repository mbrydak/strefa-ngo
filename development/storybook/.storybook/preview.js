import { ThemeProvider } from 'emotion-theming';
import { theme } from '@sn/ui-kit';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withTheme];
