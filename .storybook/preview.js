import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import 'assets/fonts/Heebo/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <IntlProvider locale="en-US" onError={() => undefined}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {Story()}
        </ThemeProvider>
      </IntlProvider>
    </MemoryRouter>
  ),
];
