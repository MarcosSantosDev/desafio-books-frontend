import { renderWithTheme } from 'lib/contexts/tests';
import bookImageOne from 'assets/images/books/book01.png';
import { Card } from './Card';

const defaultCardData = {
  id: 1,
  cardImage: bookImageOne,
  cardTitle: 'Crossing the Chasm',
  cardCaptions: ['Geoffrey A. Moore'],
  itemOne: '150 pages',
  itemTwo: 'Loyola publisher',
  itemThree: 'Published in 2020',
};

describe('<Card />', () => {
  it('should render the Card', () => {
    const { container } = renderWithTheme(<Card {...defaultCardData} />);
  });
});
