import { Meta, Story } from '@storybook/react/types-6-0';
import bookImageOne from 'assets/images/books/book01.png';
import { Card, CardProps } from './Card';

export default {
  title: 'structure/Card',
  component: Card,
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  cardImage: bookImageOne,
  bookName: 'Crossing the Chasm',
  bookAuthors: ['Geoffrey A. Moore'],
  totalPages: '150 pages',
  bookPublisher: 'Loyola publisher',
  publicationDate: 'Published in 2020',
};
