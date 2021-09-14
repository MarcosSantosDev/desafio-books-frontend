import { Meta, Story } from '@storybook/react/types-6-0';
import { ModalBook, ModalBookProps } from './ModalBook';

export default {
  title: 'structure/ModalBook',
  component: ModalBook,
} as Meta;

export const Default: Story<ModalBookProps> = (args) => <ModalBook {...args} />;
