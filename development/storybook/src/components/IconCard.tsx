import React, { ComponentType } from 'react';

import { Box, Flex } from '@sn/ui-kit';

export type IconCardProps = {
  icon: ComponentType;
};

export const IconCard = ({ icon: Icon }: IconCardProps) => {
  return (
    <Box my={24} fontSize={24} fontFamily="sans-serif">
      <Flex align="center">
        <Icon />
        <Box ml={12} fontSize={16}>
          {Icon.displayName}
        </Box>
      </Flex>
    </Box>
  );
};
