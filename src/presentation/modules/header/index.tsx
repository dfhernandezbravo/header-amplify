/* eslint-disable react-hooks/rules-of-hooks */
import { Provider } from 'react-redux';
import store from '@store/index';
import { CookiesProvider } from 'react-cookie';
import HeaderContainer from './header-container';

const Header = () => {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <HeaderContainer />
      </CookiesProvider>
    </Provider>
  );
};
export default Header;
