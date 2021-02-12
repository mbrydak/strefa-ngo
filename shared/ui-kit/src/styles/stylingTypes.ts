import type { CSSObject } from '@emotion/react';

import type { Theme } from './theme';

export type ThemeFunction<P extends Record<string, unknown> = Record<string, unknown>> = (
  props: P & { theme: Theme },
) => CSSObject;
