import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    jest: ['Heading.test.tsx']
  }
} as Meta;

export const HeadingDefault: Story<HeadingProps> = args => (
  <Heading {...args} />
);

HeadingDefault.args = {
  children: 'Example Title'
};
