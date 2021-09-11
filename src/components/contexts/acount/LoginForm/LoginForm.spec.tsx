import { renderWithTheme } from 'lib/contexts/tests';
import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
  it('should render the LoginForm', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { container } = renderWithTheme(<LoginForm onSubmit={() => {}} />);
  });
});
