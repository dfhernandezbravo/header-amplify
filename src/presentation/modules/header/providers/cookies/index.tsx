import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { setEmail } from '@store/login/slices/login-slice';
import getCustomer from '@use-cases/customer/get-customer';
import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const [cookies, setCookie] = useCookies();
  const dispatch = useAppDispatch();
  const { authCookies, userEmail } = useAppSelector((state) => state.login);

  const addCookies = useCallback(() => {
    authCookies.forEach((cookie) => {
      setCookie(cookie.name, cookie.value, { maxAge: cookie.expires });
    });
  }, [authCookies, setCookie]);

  useEffect(() => {
    if (userEmail !== '' && cookies.token) {
      dispatch(getCustomer(userEmail));
      setCookie('user', userEmail);
    }
  }, [userEmail, cookies.token, dispatch, setCookie]);

  // Agregar Cookies
  useEffect(() => {
    if (authCookies.length) {
      addCookies();
    } else {
      dispatch(setCustomer(null));
      dispatch(setEmail(''));
    }
  }, [authCookies, addCookies, dispatch]);

  return <>{children}</>;
};

export default CookiesProvider;
