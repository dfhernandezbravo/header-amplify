import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { setEmail, setLogin } from '@store/login/slices/login-slice';
import getCustomer from '@use-cases/customer/get-customer';
import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import decodeJWT from '../../../../utils/decodeJwt';
import getCheckoutAuthAndToken from '../../../../utils/getCheckoutAutAndToken';
import deleteSearParams from '../../../../utils/deleteSearParams';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const [cookies, setCookie] = useCookies();
  const dispatch = useAppDispatch();
  const { authCookies, userEmail } = useAppSelector((state) => state.login);
  const router = useRouter();

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

  useEffect(() => {
    const validateSocialLogin = window.location.search;
    if (validateSocialLogin === '') return;
    const cookies = validateSocialLogin?.replace('?', '').split('&');
    const authStatus = cookies.includes('authStatus=success');
    if (authStatus) {
      const checkoutAndToken = getCheckoutAuthAndToken(cookies);
      if (checkoutAndToken.checkoutAuth && checkoutAndToken.token) {
        const paramToDelete = [
          'authStatus',
          'authCookieName',
          'authCookieValue',
          'accountAuthCookieName',
          'accountAuthCookieValue',
          'checkoutAuthCookieName',
          'checkoutAuthCookieValue',
          'jwtAuthCookieName',
          'jwtAuthCookieValue',
        ];
        const decodeToken = decodeJWT(checkoutAndToken.token);
        const email = decodeToken?.data?.email;
        setCookie(
          'checkoutAuth',
          decodeURIComponent(checkoutAndToken.checkoutAuth),
        );
        setCookie('token', checkoutAndToken.token);
        setCookie('user', email);
        dispatch(setEmail(email));
        dispatch(getCustomer(email));
        dispatch(setLogin(true));
        const newUrl = deleteSearParams(paramToDelete);
        router.push(newUrl);
      }
    }
  }, []);

  return <>{children}</>;
};

export default CookiesProvider;
