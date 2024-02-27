import ContainerProvider from '@modules/header/providers/container';
import store, { persistor } from '@store/index';
import dynamic from 'next/dynamic';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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

const EasyThemeProvider = dynamic(
  () =>
    import('@ccom-easy-design-system/theme.theme-provider').then(
      (module) => module.EasyThemeProvider,
    ),
  { ssr: false, loading: () => <></> },
);

const ProvidersLayout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <CookiesProvider>
            <ContainerProvider>
              <EasyThemeProvider>{children}</EasyThemeProvider>
            </ContainerProvider>
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
