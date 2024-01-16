import { useAppDispatch } from '@hooks/storeHooks';
import { AUTHCOOKIES } from '@infra/cookies';
import getCustomer from '@use-cases/customer/get-customer';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const [cookies] = useCookies([AUTHCOOKIES.ACCESS_TOKEN]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cookies.accessToken) {
      console.log(cookies.accessToken);
      dispatch(getCustomer());
    }
  }, [cookies.accessToken, dispatch]);

  // useEffect(() => {
  //   const validateSocialLogin = window.location.search;
  //   if (validateSocialLogin === '') return;
  //   const cookies = validateSocialLogin?.replace('?', '').split('&');
  //   const authStatus = cookies.includes('authStatus=success');
  //   if (authStatus) {
  //     const checkoutAndToken = getCheckoutAuthAndToken(cookies);
  //     if (checkoutAndToken.checkoutAuth && checkoutAndToken.token) {
  //       const paramToDelete = [
  //         'authStatus',
  //         'authCookieName',
  //         'authCookieValue',
  //         'accountAuthCookieName',
  //         'accountAuthCookieValue',
  //         'checkoutAuthCookieName',
  //         'checkoutAuthCookieValue',
  //         'jwtAuthCookieName',
  //         'jwtAuthCookieValue',
  //       ];
  //       const decodeToken = decodeJWT(checkoutAndToken.token);
  //       const email = decodeToken?.data?.email;
  //       setCookie(
  //         'checkoutAuth',
  //         decodeURIComponent(checkoutAndToken.checkoutAuth),
  //       );
  //       setCookie('token', checkoutAndToken.token);
  //       setCookie('user', email);
  //       dispatch(setEmail(decodeURIComponent(email)));
  //       dispatch(getCustomer(email));
  //       dispatch(setLogin(true));
  //       const newUrl = deleteSearParams(paramToDelete);
  //       router.push(newUrl);
  //     }
  //   }
  // }, [dispatch]);

  return <>{children}</>;
};

export default CookiesProvider;
