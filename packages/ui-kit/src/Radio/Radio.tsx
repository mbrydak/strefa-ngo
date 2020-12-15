import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import styled from '@emotion/styled';

import { omitStyledProps } from '../styles/omitStyledProps';
import type { ThemeFunction } from '../styles/stylingTypes';

export type RadioProps = ComponentPropsWithoutRef<'input'> & {
  checked?: boolean;
  disabled?: boolean;
};

const getBorderAndBackgroundStyles: ThemeFunction<RadioProps> = ({ theme, checked, disabled }) => {
  const { primary, input } = theme.colors;

  const pseudoClassStyes = {
    '&:hover': {
      borderColor: primary.light,
    },
    '&:active': {
      borderWidth: checked ? 6 : 4,
      borderColor: checked ? primary.dark : primary.main,
    },
  };

  if (disabled) {
    return {
      borderColor: input.border,
      borderWidth: checked ? 6 : 2,
      backgroundColor: checked ? input.background : input.disabled,
      cursor: 'default',
    };
  }

  if (checked) {
    return { borderColor: primary.main, borderWidth: 6, backgroundColor: input.background, ...pseudoClassStyes };
  }

  return { borderColor: input.border, borderWidth: 2, backgroundColor: input.background, ...pseudoClassStyes };
};

const shouldForwardProp = omitStyledProps<RadioProps>(['checked', 'disabled']);

const StyledRadio = styled('div', { shouldForwardProp })<RadioProps>(
  {
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    marginRight: 8,
    borderRadius: '50%',
    width: 20,
    height: 20,
    borderStyle: 'solid',
    transition: 'all 150ms',
  },
  getBorderAndBackgroundStyles,
);

const Label = styled('label')(({ theme }) => {
  const { primary, input } = theme.colors;

  return {
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
    '&:focus': {
      [StyledRadio.toString()]: {
        outline: 'none',
        boxShadow: `0 0 0 2px ${input.background}, 0 0 0 4px ${primary.border}`,
      },
    },
  };
});

const Input = styled('input')({
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
});

export const Radio = ({ checked, disabled, children, ...props }: RadioProps) => {
  return (
    <Label>
      <Input type="radio" checked={checked} disabled={disabled} {...props} />
      <StyledRadio checked={checked} disabled={disabled} {...props} />
      <span>{children}</span>
    </Label>
  );
};
