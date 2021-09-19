import { renderWithTheme } from 'lib/contexts/tests';
import { CardBook } from './CardBook';

const defaultCardData = {
  id: '1ds5f5f',
  imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
  title: 'Crossing the Chasm',
  authors: ['Geoffrey A. Moore'],
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
};

describe('<CardBook />', () => {
  it('should render the CardBook', () => {
    const { container } = renderWithTheme(<CardBook {...defaultCardData} />);
  });
});
