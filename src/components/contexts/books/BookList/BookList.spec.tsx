import { renderWithTheme } from 'lib/contexts/tests';
import { BookList } from './BookList';

describe('<BookList />', () => {
  it('should render the BookList', () => {
    const { container } = renderWithTheme(<BookList />);
  });
});
