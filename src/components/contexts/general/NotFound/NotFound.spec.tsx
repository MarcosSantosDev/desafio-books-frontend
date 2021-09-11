import { renderWithTheme } from 'lib/contexts/tests';
import { NotFound } from './NotFound';

describe('<NotFound />', () => {
  it('should render the NotFound', () => {
    const { container } = renderWithTheme(<NotFound />);
  });
});
