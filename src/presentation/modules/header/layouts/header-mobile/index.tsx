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
import ModalRegionalizer from '@modules/header/sections/header-modal-regionalizer';
import { useRouter } from 'next/router';

const HeaderMobile = () => {
  const { isOpenResults } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const { pathname } = useRouter()
  const isCartPath = pathname.includes('cart')

  return (
    <Mobile>
      <HeaderMobileContainer>
        <HeaderMobileOptionSection isCartPath={isCartPath}>
          <HeaderMobileOptionSectionElement>
            <HeaderMenu isCartPath={isCartPath}/>
            <HeaderLogo />
          </HeaderMobileOptionSectionElement>

          <HeaderMobileOptionSectionElement isCartPath={isCartPath}>
            <HeaderLogin />
            <HeaderCart />
          </HeaderMobileOptionSectionElement>
        </HeaderMobileOptionSection>
        <HeaderCategory />

        <HeaderMobileSearchSection isCartPath={isCartPath}>
          <SearchInputContainer
            onClick={() => dispatch(openResults())}
            placeholder="¡Hola! ¿Qué estás buscando?"
          />
        </HeaderMobileSearchSection>

        {isOpenResults && <HeaderSearchMobile />}

        <HeaderMobileLocationSection isCartPath={isCartPath}>
          <HeaderLocation  isCartPath={isCartPath}/>
        </HeaderMobileLocationSection>
      </HeaderMobileContainer>
      <ModalRegionalizer />
      <HeaderModalLogin />
    </Mobile>
  );
};

export default HeaderMobile;
