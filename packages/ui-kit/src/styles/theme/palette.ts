import { transparentize } from 'polished';

const colors = {
  primary: {
    dark: '#2b7cd9',
    main: '#409eff',
    light: '#69b9ff',
    border: '#bae3ff',
    background: '#f0faff',
    contrastText: '#FFFFFF',
  },
  info: {
    dark: '#08979c',
    main: '#13c2c2',
    light: '#36cfc9',
    border: '#87e8de',
    background: '#e6fffb',
    contrastText: '#FFFFFF',
  },
  success: {
    dark: '#389e0d',
    main: '#52c41a',
    light: '#73d13d',
    border: '#b7eb8f',
    background: '#f6ffed',
    contrastText: '#FFFFFF',
  },
  warning: {
    dark: '#d48806',
    main: '#faad14',
    light: '#ffc53d',
    border: '#ffe58f',
    background: '#fffbe6',
    contrastText: '#FFFFFF',
  },
  error: {
    dark: '#cf1322',
    main: '#f5222d',
    light: '#ff4d4f',
    border: '#ffa39e',
    background: '#fff1f0',
    contrastText: '#FFFFFF',
  },
  background: {
    base: transparentize(0.96, '#000'),
    light: transparentize(0.98, '#000'),
    body: '#f0f2f5',
    component: '#fff',
  },
  border: {
    base: transparentize(0.85, '#000'),
    split: transparentize(0.91, '#000'),
  },
  text: {
    title: transparentize(0.15, '#000'),
    primary: transparentize(0.35, '#000'),
    secondary: transparentize(0.55, '#000'),
    disabled: transparentize(0.75, '#000'),
    white: '#fff',
  },
} as const;

export const palette = { colors };
