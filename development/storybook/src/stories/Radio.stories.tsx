import React from 'react';
import { Radio, RadioProps } from '@sn/ui-kit';
import { Meta, Story } from '@storybook/react';

import { disabledControls } from '../helpers';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: disabledControls,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  disabled: false,
  children: 'Radio button',
};
