import type { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import { padding } from 'polished';

import { omitStyledProps } from '../styles/omitStyledProps';
import type { ThemeFunction } from '../styles/stylingTypes';

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'error';

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'color'> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
};

const getSizeStyles: ThemeFunction<ButtonProps> = ({ theme: { fontSizes, lineHeights }, size }) => {
  if (size === 'large') {
    return { fontSize: fontSizes.large, lineHeight: lineHeights.small, ...padding(12, 16) };
  }

  if (size === 'small') {
    return { fontSize: fontSizes.small, lineHeight: lineHeights.small, ...padding(4, 8) };
  }

  return { fontSize: fontSizes.normal, lineHeight: lineHeights.small, ...padding(8, 12) };
};

const getColorAndVariantStyles: ThemeFunction<ButtonProps> = ({ theme, variant, color = 'primary' }) => {
  const { main, contrastText } = theme.colors[color];

  if (variant === 'outlined') {
    return { borderColor: main, color: main };
  }

  if (variant === 'text') {
    return { color: main };
  }

  return { backgroundColor: main, color: contrastText };
};

const shouldForwardProp = omitStyledProps<ButtonProps>(['color', 'size', 'variant']);

export const Button = styled('button', { shouldForwardProp })<ButtonProps>(
  {
    borderRadius: 4,
    boxSizing: 'border-box',
    border: '2px solid transparent',
    backgroundColor: 'transparent',
  },
  getSizeStyles,
  getColorAndVariantStyles,
);
