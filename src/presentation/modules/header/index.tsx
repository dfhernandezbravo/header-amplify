/* eslint-disable react-hooks/rules-of-hooks */
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';

const Header = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
};
export default Header;
