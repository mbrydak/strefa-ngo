import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
