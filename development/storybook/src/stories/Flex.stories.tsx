import React from 'react';
import { Flex, FlexProps } from '@sn/ui-kit';
import { Meta, Story } from '@storybook/react';

import { createSelectControl, disabledControls } from '../helpers';

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {
    ...disabledControls,
    align: createSelectControl(Flex.alignItemsKeys),
    justify: createSelectControl(Flex.justifyContentKeys),
    direction: createSelectControl(Flex.flexDirectionKeys),
  },
} as Meta;

const childStyle = { backgroundColor: 'orange', margin: 8, minWidth: 24, minHeight: 24 };

const Template: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <div style={childStyle} />
    <div style={childStyle} />
    <div style={childStyle} />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  width: 200,
  height: 200,
  backgroundColor: 'purple',
};
