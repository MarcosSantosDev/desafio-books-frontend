import { renderWithTheme } from 'lib/contexts/tests';
import { Error } from './Error';

describe('<Error />', () => {
  it('should render the Error', () => {
    const { container } = renderWithTheme(<Error />);
  });
});
