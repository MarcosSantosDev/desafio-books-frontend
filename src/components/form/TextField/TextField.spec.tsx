import { renderWithTheme } from 'lib/contexts/tests';
import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render the TextField', () => {
    const { container } = renderWithTheme(<TextField />);
  });
});
