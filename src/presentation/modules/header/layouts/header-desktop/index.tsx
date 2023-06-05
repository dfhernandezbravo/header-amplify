import Desktop from '@components/layout/desktop';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderFooter from '@modules/header/sections/header-footer';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderSearch from '@modules/header/sections/header-search';
import HeaderTopBrands from '@modules/header/sections/header-top-brands';
import React from 'react';
import { HeaderDesktopContainer, HeaderDesktopSearchSection } from './styles';

const HeaderDesktop = () => {
  return (
    <Desktop>
      <HeaderTopBrands />
      <HeaderDesktopContainer>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderLocation />
        <HeaderDesktopSearchSection>
          <HeaderSearch />
        </HeaderDesktopSearchSection>
        <HeaderLogin />
        <HeaderCart />
      </HeaderDesktopContainer>
      <HeaderFooter />
    </Desktop>
  );
};

export default HeaderDesktop;
