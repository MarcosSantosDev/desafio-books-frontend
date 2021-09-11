import { renderWithTheme } from 'lib/contexts/tests';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render the Button', () => {
    const { container } = renderWithTheme(<Button />);
  });

  it('should display text content equal to "Click me!" on the Button', () => {
    const { container } = renderWithTheme(<Button>Click me!</Button>);
    expect(container.textContent).toEqual('Click me!');
    expect(container.textContent).not.toEqual('No click me!');
  });
});
