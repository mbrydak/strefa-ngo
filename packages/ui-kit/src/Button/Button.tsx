import { ComponentPropsWithoutRef } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import { padding } from 'polished';

import { omitStyledProps } from '../styles/omitStyledProps';
import { theme } from '../styles/theme';

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonColor = 'primary' | 'info' | 'success' | 'warning' | 'error';

type ColorSet = { main: string; contrastText: string };

export type ButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'color'> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
};

const sizes: Record<ButtonSize, SerializedStyles> = {
  small: css({ fontSize: 12, lineHeight: '16px', ...padding(4, 8) }),
  medium: css({ fontSize: 14, lineHeight: '16px', ...padding(8, 12) }),
  large: css({ fontSize: 16, lineHeight: '16px', ...padding(12, 16) }),
};

const variants: Record<ButtonVariant, (colorSet: ColorSet) => SerializedStyles> = {
  filled: ({ main, contrastText }) => css({ backgroundColor: main, color: contrastText }),
  outlined: ({ main }) => css({ borderColor: main, color: main }),
  text: ({ main }) => css({ color: main }),
};

const getColorSet = (color: ButtonColor): ColorSet => theme.colors[color];

const sizeStyles = ({ size = 'medium' }: ButtonProps) => sizes[size];

const colorAndVariantStyles = ({ variant = 'filled', color = 'primary' }: ButtonProps) => {
  const colorSet = getColorSet(color);
  return variants[variant](colorSet);
};

const shouldForwardProp = omitStyledProps<ButtonProps>(['color', 'size', 'variant']);

export const Button = styled('button', { shouldForwardProp })<ButtonProps>(
  {
    borderRadius: 4,
    boxSizing: 'border-box',
    border: '2px solid transparent',
    backgroundColor: 'transparent',
  },
  sizeStyles,
  colorAndVariantStyles,
);
