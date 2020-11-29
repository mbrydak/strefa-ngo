import { palette } from './palette';
import { responsiveness } from './responsiveness';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  ...spacing,
  ...palette,
  ...typography,
  ...responsiveness,
};

export type Theme = Omit<typeof theme, 'space'>;
