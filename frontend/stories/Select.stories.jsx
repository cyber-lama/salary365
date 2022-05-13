import React from 'react';

import Select from '../components/Select/Select';
const options = [
  {
    value: 1,
    label: 'ООО "ФИНБРИДЖ"',
    description: '6162069688, г Ростов-на-Дону, ул Портовая, д 193, офис 308',
  },
  {
    value: 3,
    label: 'good first issue',
    description: 'Good for newcomers',
  },

  {
    value: 5,
    label: 'ООО "ФИНМИЛИТАРС"',
    description:
      '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  },
];
export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {},
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fullWidth: true,
  open: true,
  options: options
};


