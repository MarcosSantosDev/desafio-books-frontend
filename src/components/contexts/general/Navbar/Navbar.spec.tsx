import { renderWithTheme } from 'lib/contexts/tests';
import { Navbar } from './Navbar';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const logout = () => {};

describe('<Navbar />', () => {
  it('should render the Navbar', () => {
    const { container } = renderWithTheme(
      <Navbar userName="José" logout={logout} />,
    );
  });

  it('should render the Navbar with text "Welcome, José!"', () => {
    const { container } = renderWithTheme(
      <Navbar userName="José" logout={logout} />,
    );
    expect(container.textContent).toEqual(`Welcome, José!`);
  });
});
