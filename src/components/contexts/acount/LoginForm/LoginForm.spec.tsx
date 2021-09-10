import { renderWithTheme } from 'lib/contexts/tests';
import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
  it('should render the LoginForm', () => {
    const { container } = renderWithTheme(<LoginForm />);
  });
});
