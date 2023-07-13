import React, { useCallback, useEffect, useState } from 'react';
import HeaderMobile from './layouts/header-mobile';
import HeaderDesktop from './layouts/header-desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';
import { HeaderContainerWrapper } from './styles';
import getCustomer from '@use-cases/customer/get-customer';
import { setEmail } from '@store/login/slices/login-slice';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { closeResults } from '@store/search/slices/search-slice';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { setShoppingCartUse, setQuantity } from '@store/shopping-cart/slices/shopping-cart-slice';
import { WindowsEvents } from '../../events';

const HeaderContainer = () => {
  const { authCookies, userEmail } = useAppSelector((state) => state.login);
  const { orderFormId, quantity } = useAppSelector((state) => state.shoppingCart);
  const [cookies, setCookie] = useCookies();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const addCookies = useCallback(() => {
    authCookies.forEach((cookie) => {
      setCookie(cookie.name, cookie.value, { maxAge: cookie.expires });
    });
  }, [authCookies, setCookie]);

  useEffect(() => {
    if (authCookies.length) {
      addCookies();
    } else {
      dispatch(setCustomer(null));
      dispatch(setEmail(''));
    }
  }, [authCookies, addCookies, dispatch]);

  useEffect(() => {
    if (userEmail !== '' && cookies.token) {
      dispatch(getCustomer(userEmail));
      setCookie('user', userEmail);
    }
  }, [dispatch, userEmail, setCookie, cookies.token]);

  useEffect(() => {
    const email = cookies.user;
    if (email) {
      dispatch(setEmail(email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!orderFormId) {
      dispatch(getShoppingCart());
    }
    customDispatchEvent({
      name: WindowsEvents.CART_HEADER,
      detail: { cartId: orderFormId },
    });
  }, [orderFormId, dispatch]);

  const handleAddProductInCartEvent = useCallback(
    (event: Event) => {
      console.log("ESCUCHANDO EVENTO:::", event)
      event.preventDefault();
      const customEvent = event as CustomEvent<{ isShoppingCartUsed: boolean, quantityItems: number }>;
      console.log(customEvent.detail);
      dispatch(setShoppingCartUse(customEvent.detail.isShoppingCartUsed));
      dispatch(setQuantity(customEvent.detail.quantityItems))
      
    },
    [dispatch],
  );

  useEffect(() => {
    document.addEventListener(
      WindowsEvents.CART_HEADER,
      handleAddProductInCartEvent,
    );
  }, [handleAddProductInCartEvent]);

  console.log("cantidad:", quantity)

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
