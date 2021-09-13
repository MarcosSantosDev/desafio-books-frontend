import { Meta, Story } from '@storybook/react/types-6-0';
import bookImageOne from 'assets/images/books/book01.png';
import { Card, CardProps } from './Card';

export default {
  title: 'structure/Card',
  component: Card,
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  id: 1,
  cardImage: bookImageOne,
  cardTitle: 'Crossing the Chasm',
  cardCaptions: ['Geoffrey A. Moore'],
  itemOne: '150 pages',
  itemTwo: 'Loyola publisher',
  itemThree: 'Published in 2020',
};
