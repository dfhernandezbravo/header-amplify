import store, { persistor } from '@store/index';
import { themeStyled } from '@theme/index';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ProvidersLayout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <CookiesProvider>
            <ThemeProvider theme={themeStyled}>{children}</ThemeProvider>
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
