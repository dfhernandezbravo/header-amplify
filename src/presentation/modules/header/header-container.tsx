import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCategories } from '@store/category/slices/category-slice';
import {
  closeModalLogin,
  openModalLogin,
} from '@store/login/slices/login-slice';
import { closeResults } from '@store/search/slices/search-slice';
import getCategories from '@use-cases/category/get-categories';
import getCustomer from '@use-cases/customer/get-customer';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import CookiesProvider from './providers/cookies';
import WindowsEventProvider from './providers/windows-event';
import { HeaderContainerWrapper } from './styles';
import { HeaderProps } from './types';
import useScroll from './hooks/use-scroll';

const heightHeader = 170;

const HeaderContainer = ({ modules }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { data: categories } = useQuery(['get-categories'], getCategories);
  const router = useRouter();
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;
  const { customer } = useAppSelector((state) => state.customer);
  const { visible, positionScroll } = useScroll({ heightHeader });

  if (categories) dispatch(setCategories(categories));

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

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

  useEffect(() => {
    if (!customer) dispatch(getCustomer());
  }, [customer]);

  const renderBody = useMemo(
    () => (
      <>
        <HeaderContainerWrapper
          $visible={visible}
          $positionScroll={positionScroll}
          $heightHeader={heightHeader}
        >
          <HeaderMobile modules={modules} />
          <HeaderDesktop modules={modules} />
        </HeaderContainerWrapper>
      </>
    ),
    [visible, positionScroll],
  );

  return (
    <WindowsEventProvider>
      <CookiesProvider>{renderBody}</CookiesProvider>
    </WindowsEventProvider>
  );
};

export default HeaderContainer;
