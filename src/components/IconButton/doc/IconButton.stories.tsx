import React from 'react';
import { Box } from 'grommet';
import { Favorite } from 'grommet-icons';
import { IconButton } from '../IconButton';

export default {
  title: 'CONTROLS|controls/IconButton',
  component: IconButton,
};

export const main = () => (
  <Box basis='medium' align='center'>
    <IconButton
      icon={<Favorite />}
      onClick={() => alert('Clicked')}
    />
  </Box>
);