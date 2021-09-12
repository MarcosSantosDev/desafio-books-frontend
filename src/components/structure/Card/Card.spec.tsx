import { renderWithTheme } from 'lib/contexts/tests';
import bookImageOne from 'assets/images/books/book01.png';
import { Card } from './Card';

const defaultCardData = {
  cardImage: bookImageOne,
  bookName: 'Crossing the Chasm',
  bookAuthors: ['Geoffrey A. Moore'],
  totalPages: '150 pages',
  bookPublisher: 'Loyola publisher',
  publicationDate: 'Published in 2020',
};

describe('<Card />', () => {
  it('should render the Card', () => {
    const { container } = renderWithTheme(<Card {...defaultCardData} />);
  });
});
