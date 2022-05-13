import React from 'react';

import { Button } from '@mui/material';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
    }
  },
};

const Template = (args) => <Button {...args} >buttonText</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained'
};

export const Outline = Template.bind({});
Outline.args = {
  color: 'secondary',
  variant: 'outlined',
};


