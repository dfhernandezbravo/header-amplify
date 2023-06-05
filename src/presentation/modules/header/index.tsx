/* eslint-disable react-hooks/rules-of-hooks */
import { Provider } from 'react-redux';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import store from '@store/index';

const Header = () => {
  return (
    <Provider store={store}>
      <HeaderMobile />
      <HeaderDesktop />
    </Provider>
  );
};
export default Header;
