import Desktop from '@components/layout/desktop';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderFooter from '@modules/header/sections/header-footer';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderSearch from '@modules/header/sections/header-search';
import HeaderTopBrands from '@modules/header/sections/header-top-brands';
import React from 'react';
import {
  Container,
  Divider,
  HeaderDesktopContainer,
  HeaderDesktopSearchSection,
} from './styles';
import HeaderResults from '@modules/header/sections/header-results';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderCategory from '@modules/header/sections/header-category';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import ModalRegionalizer from '@modules/header/sections/header-modal-regionalizer';
import { useRouter } from 'next/router';

const HeaderDesktop = () => {

  const { pathname } = useRouter()
  const isCartPath = pathname.includes('cart')

  return (
    <Desktop>
      <HeaderTopBrands isCartPath={isCartPath}/>
      <HeaderDesktopContainer isCartPath={isCartPath}>
        <HeaderLogo />
        <HeaderMenu isCartPath={isCartPath}/>
        <HeaderLocation />
        <HeaderDesktopSearchSection  isCartPath={isCartPath}>
          <HeaderSearch />
          <HeaderResults />
        </HeaderDesktopSearchSection>
        <Container  isCartPath={isCartPath}>
          <HeaderLogin />
          <Divider />
          <HeaderCart />
        </Container>
      </HeaderDesktopContainer>
      <HeaderModalLogin />
      <ModalRegionalizer />
      <HeaderCategory />
      <HeaderFooter isCartPath={isCartPath}/>
    </Desktop>
  );
};

export default HeaderDesktop;
