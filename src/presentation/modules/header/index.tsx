/* eslint-disable react-hooks/rules-of-hooks */
import { Provider } from 'react-redux';
import store, { persistor } from '@store/index';
import { CookiesProvider } from 'react-cookie';
import HeaderContainer from './header-container';
import { PersistGate } from 'redux-persist/integration/react';

const Header = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <CookiesProvider>
          <HeaderContainer />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
};
export default Header;
