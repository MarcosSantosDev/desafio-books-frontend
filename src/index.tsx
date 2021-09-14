import { AppContexts } from 'app.contexts';
import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import Routes from 'routes';
import { ModalProvider } from 'contexts';
import reportWebVitals from './reportWebVitals';
import 'assets/fonts/Heebo/index.css';

const swrConfigs = { revalidateOnFocus: false, shouldRetryOnError: false };

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfigs}>
      <ModalProvider>
        <AppContexts>
          <Routes />
        </AppContexts>
      </ModalProvider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
