import Mobile from '@components/layout/mobile';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderSearch from '@modules/header/sections/header-search';
import React from 'react';
import {
  HeaderMobileContainer,
  HeaderMobileLocationSection,
  HeaderMobileOptionSection,
  HeaderMobileOptionSectionElement,
  HeaderMobileSearchSection,
} from './styles';

const HeaderMobile = () => {
  return (
    <Mobile>
      <HeaderMobileContainer>
        <HeaderMobileOptionSection>
          <HeaderMobileOptionSectionElement>
            <HeaderMenu />
            <HeaderLogo />
          </HeaderMobileOptionSectionElement>

          <HeaderMobileOptionSectionElement>
            <HeaderLogin />
            <HeaderCart />
          </HeaderMobileOptionSectionElement>
        </HeaderMobileOptionSection>

        <HeaderMobileSearchSection>
          <HeaderSearch />
        </HeaderMobileSearchSection>

        <HeaderMobileLocationSection>
          <HeaderLocation />
        </HeaderMobileLocationSection>
      </HeaderMobileContainer>
    </Mobile>
  );
};

export default HeaderMobile;
