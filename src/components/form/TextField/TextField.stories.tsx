import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'form/TextField',
  component: TextField,
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

Default.args = {
  type: 'email',
  label: 'Email',
  value: 'ioasys@ioasys.com.br',
};
