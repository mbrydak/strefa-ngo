import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Box, BoxProps } from '@sn/ui-kit';

import { disabledControls } from '../helpers';

export default {
  title: 'Box',
  component: Box,
  argTypes: disabledControls,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 100,
  backgroundColor: 'red',
};
