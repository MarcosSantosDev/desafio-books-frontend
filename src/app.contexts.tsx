import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { useModalContext, AuthProvider } from 'contexts';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { WithChildren } from 'interfaces/children';

export const AppContexts = ({ children }: WithChildren) => {
  const { showModal } = useModalContext();
  const isBlockScroll = showModal;

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles blockScroll={isBlockScroll} />
        <HelmetProvider>{children}</HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
