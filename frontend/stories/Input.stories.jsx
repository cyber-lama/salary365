import React from 'react';

import { TextField } from '@mui/material';
import TextInput from '../components/TextInput/TextInput';

export default {
  title: 'Example/Input',
  component: TextField,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    }
  },
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  placeholder: 'placeholder',
  variant: 'outlined',
  error: true,
  helperText: '123',
  autoFocus: true,
};

export const Masked = Template.bind({});
Masked.args = {
  variant: 'outlined',
  mask: true,
  label: 'Phone',
};


