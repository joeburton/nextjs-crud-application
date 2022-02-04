import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectMenu } from '../components/SelectMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SelectMenu',
  component: SelectMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SelectMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectMenu> = (args) => {
  const [target, setTarget] = useState<string | number>('es2019');

  const targets = [
    { value: 'es3', label: 'ECMAScript 3' },
    { value: 'es5', label: 'ECMAScript 5' },
    { value: 'es2015', label: 'ECMAScript 2015' },
    { value: 'es2016', label: 'ECMAScript 2016' },
    { value: 'es2017', label: 'ECMAScript 2017' },
    { value: 'es2018', label: 'ECMAScript 2018' },
    { value: 'es2019', label: 'ECMAScript 2019' },
  ];
  return <SelectMenu options={targets} value={target} onChange={setTarget} />;
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
