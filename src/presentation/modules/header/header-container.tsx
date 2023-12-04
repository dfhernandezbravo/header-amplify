import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeResults } from '@store/search/slices/search-slice';
import { useEffect, useMemo } from 'react';
import useScroll from './hooks/use-scroll';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import CookiesProvider from './providers/cookies';
import WindowsEventProvider from './providers/windows-event';
import { HeaderContainerWrapper } from './styles';
import { HeaderProps } from './types';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';

const HeaderContainer = ({ modules }: HeaderProps) => {
  const { orderFormId } = useAppSelector((state) => state.shoppingCartHeader);

  const dispatch = useAppDispatch();
  const { visible } = useScroll();

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

  useEffect(() => {
    if (!orderFormId) {
      dispatch(getShoppingCart());
    }
  }, []);

  const renderBody = useMemo(
    () => (
      <HeaderContainerWrapper visible={visible}>
        <HeaderMobile modules={modules} />
        <HeaderDesktop modules={modules} />
      </HeaderContainerWrapper>
    ),
    [visible],
  );

  return (
    <WindowsEventProvider>
      <CookiesProvider>{renderBody}</CookiesProvider>
    </WindowsEventProvider>
  );
};

export default HeaderContainer;
