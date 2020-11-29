const fonts = {
  main:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  code: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
} as const;

const fontSizes = {
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 16,
  large: 16,
  normal: 14,
  small: 12,
} as const;

const lineHeights = {
  h1: '32px',
  h2: '28px',
  h3: '24px',
  h4: '20px',
  large: '20px',
  normal: '20px',
  small: '16px',
} as const;

const fontWeights = {
  normal: 400,
  bold: 600,
} as const;

export const typography = {
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
};
