import React from 'react';

import { Slider } from '@mui/material';

export default {
  title: 'Example/Slider',
  component: Slider,
  argTypes: {},
};

const Template = (args) => <div style={{background:'#7A46DA'}}><Slider {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {};


