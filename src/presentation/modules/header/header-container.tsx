import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { setEmail } from '@store/login/slices/login-slice';
import { closeResults } from '@store/search/slices/search-slice';
import {
  setQuantity,
  setShoppingCartUse,
} from '@store/shopping-cart/slices/shopping-cart-slice';
import getCustomer from '@use-cases/customer/get-customer';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import { HeaderContainerWrapper } from './styles';

const HeaderContainer = () => {
  const { authCookies, userEmail } = useAppSelector((state) => state.login);
  const { orderFormId } = useAppSelector((state) => state.shoppingCartHeader);
  const [cookies, setCookie] = useCookies();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const addCookies = useCallback(() => {
    authCookies.forEach((cookie) => {
      setCookie(cookie.name, cookie.value, { maxAge: cookie.expires });
    });
  }, [authCookies, setCookie]);

  // Agregar Cookies
  useEffect(() => {
    if (authCookies.length) {
      addCookies();
    } else {
      dispatch(setCustomer(null));
      dispatch(setEmail(''));
    }
  }, [authCookies, addCookies, dispatch]);

  // Obtener datos del cliente
  useEffect(() => {
    if (userEmail !== '' && cookies.token) {
      dispatch(getCustomer(userEmail));
      setCookie('user', userEmail);
    }
  }, [userEmail, cookies.token, dispatch, setCookie]);

  // Validar cookies al iniciar la app
  useEffect(() => {
    const email = cookies.user;
    if (email) {
      dispatch(setEmail(email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll del Header
  useEffect(() => {
    if (!orderFormId) {
      dispatch(getShoppingCart());
    }
    customDispatchEvent({
      name: WindowsEvents.CART_HEADER,
      detail: { cartId: orderFormId },
    });
    customDispatchEvent({
      name: WindowsEvents.CART_ID,
      detail: { cartId: orderFormId },
    });
  }, [orderFormId, dispatch]);

  useEffect(() => {
    document.addEventListener(WindowsEvents.CART_HEADER, (event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<{
        isShoppingCartUsed?: boolean;
        quantityItems?: number;
      }>;
      if (customEvent.detail.quantityItems) {
        dispatch(setQuantity(customEvent.detail.quantityItems));
      }
      if (customEvent.detail.isShoppingCartUsed) {
        dispatch(setShoppingCartUse(customEvent.detail.isShoppingCartUsed));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

  return (
    <HeaderContainerWrapper visible={visible}>
      <HeaderMobile />
      <HeaderDesktop />
    </HeaderContainerWrapper>
  );
};

export default HeaderContainer;
