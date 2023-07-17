import Desktop from '@components/layout/desktop';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderFooter from '@modules/header/sections/header-footer';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderSearch from '@modules/header/sections/header-search';
import HeaderTopBrands from '@modules/header/sections/header-top-brands';
import React from 'react';
import { HeaderDesktopContainer, HeaderDesktopSearchSection } from './styles';
import HeaderResults from '@modules/header/sections/header-results';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderCategory from '@modules/header/sections/header-category';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import ModalRegionalizer from '@modules/header/sections/header-modal-regionalizer';

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
          <HeaderResults />
        </HeaderDesktopSearchSection>
        <HeaderLogin />
        <HeaderCart />
      </HeaderDesktopContainer>
      <HeaderModalLogin />
      <ModalRegionalizer />
      <HeaderCategory />
      <HeaderFooter />
    </Desktop>
  );
};

export default HeaderDesktop;
