import { Meta, Story } from '@storybook/react/types-6-0';
import { Error, ErrorProps } from './Error';

export default {
  title: 'form/Error',
  component: Error,
} as Meta;

export const Default: Story<ErrorProps> = (args) => <Error {...args} />;
