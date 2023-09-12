/* eslint-disable react-hooks/rules-of-hooks */
import { Provider } from 'react-redux';
import store, { persistor } from '@store/index';
import { CookiesProvider } from 'react-cookie';
import HeaderContainer from './header-container';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { themeStyled } from '@theme/index';

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
