import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderCategory from '@modules/header/sections/header-category';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderSearchMobile from '@modules/header/sections/header-search-mobile';
import { openResults } from '@store/search/slices/search-slice';
import React from 'react';
import {
  HeaderMobileContainer,
  HeaderMobileLocationSection,
  HeaderMobileOptionSection,
  HeaderMobileOptionSectionElement,
  HeaderMobileSearchSection,
  SearchInputContainer,
} from './styles';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';

const HeaderMobile = () => {
  const { isOpenResults } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

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
        <HeaderCategory />

        <HeaderMobileSearchSection>
          <SearchInputContainer
            onClick={() => dispatch(openResults())}
            placeholder="¡Hola! ¿Qué estás buscando?"
          />
        </HeaderMobileSearchSection>

        {isOpenResults && <HeaderSearchMobile />}

        <HeaderMobileLocationSection>
          <HeaderLocation />
        </HeaderMobileLocationSection>
      </HeaderMobileContainer>
      <HeaderModalLogin />
    </Mobile>
  );
};

export default HeaderMobile;
