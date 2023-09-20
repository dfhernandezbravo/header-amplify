/* eslint-disable react-hooks/rules-of-hooks */
import store, { persistor } from '@store/index';
import { themeStyled } from '@theme/index';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import HeaderContainer from './header-container';

const Header = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <CookiesProvider>
          <ThemeProvider theme={themeStyled}>
            <HeaderContainer />
          </ThemeProvider>
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
};
export default Header;
