import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Design System/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<HeadingProps> = args => <Heading {...args} />;

Default.args = {
  children: 'Heading'
};
