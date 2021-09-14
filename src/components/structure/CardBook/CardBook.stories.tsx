import { Meta, Story } from '@storybook/react/types-6-0';
import { CardBook, CardBookProps } from './CardBook';

export default {
  title: 'structure/Card',
  component: CardBook,
} as Meta;

export const Default: Story<CardBookProps> = (args) => <CardBook {...args} />;

Default.args = {
  id: '1ds5f5f',
  imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
  title: 'Crossing the Chasm',
  authors: ['Geoffrey A. Moore'],
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
};
