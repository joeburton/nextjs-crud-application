import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '../components/Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { title: 'Item 1', description: 'description 1' },
    { title: 'Item 2', description: 'description 2' },
  ],
};
