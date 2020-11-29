import type { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import type {
  BackgroundProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { background, color, compose, flexbox, layout, space, typography } from 'styled-system';

import type { Theme } from '../styles';
import {
  AlignItems,
  alignItemsKeys,
  FlexDirection,
  flexDirectionKeys,
  JustifyContent,
  justifyContentKeys,
} from './Flex.constants';

export type FlexProps = BackgroundProps &
  ColorProps &
  Omit<LayoutProps, 'display'> &
  SpaceProps &
  TypographyProps &
  Omit<FlexboxProps, 'alignItems' | 'flexDirection' | 'justifyContent'> &
  ComponentPropsWithoutRef<'div'> & {
    align?: ResponsiveValue<AlignItems, Theme>;
    direction?: ResponsiveValue<FlexDirection, Theme>;
    justify?: ResponsiveValue<JustifyContent, Theme>;
  };

const system = compose(background, color, compose, flexbox, layout, space, typography);

const FlexComponent = styled('div')<FlexProps>((props: FlexProps & FlexboxProps & { theme: Theme }) => {
  /* eslint-disable no-param-reassign */
  props.alignItems = props.align;
  props.flexDirection = props.direction;
  props.justifyContent = props.justify;
  /* eslint-enable no-param-reassign */

  return {
    ...system(props),
    display: 'flex',
  };
});

FlexComponent.displayName = 'Flex';

export const Flex = FlexComponent as typeof FlexComponent & {
  alignItemsKeys: typeof alignItemsKeys;
  flexDirectionKeys: typeof flexDirectionKeys;
  justifyContentKeys: typeof justifyContentKeys;
};

Flex.alignItemsKeys = alignItemsKeys;
Flex.flexDirectionKeys = flexDirectionKeys;
Flex.justifyContentKeys = justifyContentKeys;
