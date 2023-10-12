import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeResults } from '@store/search/slices/search-slice';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';
import React, { useEffect } from 'react';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import CookiesProvider from './providers/cookies';
import WindowsEventProvider from './providers/windows-event';
import { HeaderContainerWrapper } from './styles';
import useScroll from './hooks/use-scroll';

const HeaderContainer = () => {
  const { orderFormId } = useAppSelector((state) => state.shoppingCartHeader);
  const dispatch = useAppDispatch();
  const { visible } = useScroll();

  useEffect(() => {
    if (!orderFormId) dispatch(getShoppingCart());
  }, [orderFormId]);

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

  return (
    <WindowsEventProvider>
      <CookiesProvider>
        <HeaderContainerWrapper visible={visible}>
          <HeaderMobile />
          <HeaderDesktop />
        </HeaderContainerWrapper>
      </CookiesProvider>
    </WindowsEventProvider>
  );
};

export default HeaderContainer;
