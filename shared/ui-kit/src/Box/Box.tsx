import { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import type { BackgroundProps, ColorProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';
import { background, color, compose, layout, space, typography } from 'styled-system';

export type BoxProps = BackgroundProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  ComponentPropsWithoutRef<'div'>;

const system = compose(space, color, typography, layout, background);

export const Box = styled('div')<BoxProps>(system);
