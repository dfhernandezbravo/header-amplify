import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCategories } from '@store/category/slices/category-slice';
import { closeResults } from '@store/search/slices/search-slice';
import getCategories from '@use-cases/category/get-categories';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import useScroll from './hooks/use-scroll';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import CookiesProvider from './providers/cookies';
import WindowsEventProvider from './providers/windows-event';
import { HeaderContainerWrapper, Spacer } from './styles';
import { HeaderProps } from './types';
import { useRouter } from 'next/router';
import {
  closeModalLogin,
  openModalLogin,
} from '@store/login/slices/login-slice';

const HeaderContainer = ({ modules }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { visible } = useScroll();
  const { data: categories } = useQuery(['get-categories'], getCategories);

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

  if (categories) dispatch(setCategories(categories));

  const router = useRouter();
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;

  useEffect(() => {
    if (router?.pathname?.includes('/account') && isLogged === false) {
      setTimeout(() => {
        dispatch(openModalLogin());
      }, 0);
    }
  }, [router, isLogged]);

  useEffect(() => {
    if (router?.pathname === '/') {
      dispatch(closeModalLogin());
    }
  }, []);

  const renderBody = useMemo(
    () => (
      <>
        <HeaderContainerWrapper visible={visible}>
          <HeaderMobile modules={modules} />
          <HeaderDesktop modules={modules} />
        </HeaderContainerWrapper>
        <Spacer />
      </>
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
