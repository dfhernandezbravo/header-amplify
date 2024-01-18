import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/storeHooks';
import { setSoftLoginName } from '@store/login/slices/login-slice';
import { AUTHCOOKIES } from '@infra/cookies';
import getCustomer from '@use-cases/customer/get-customer';
import { useCookies } from 'react-cookie';
import { Customer } from '@entities/customer/customer.entity';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const [cookies, setCookies] = useCookies([
    AUTHCOOKIES.ACCESS_TOKEN,
    'softLogin',
  ]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const validateAccessToken = async () => {
      if (cookies.accessToken) {
        const response = await dispatch(getCustomer());
        if ((response.payload as Customer).firstName) {
          const currentDate = new Date();
          const expirationDate = new Date(
            currentDate.getFullYear() + 1,
            currentDate.getMonth(),
            currentDate.getDate(),
          );
          const softLoginValue = (response.payload as Customer).firstName;
          setCookies('softLogin', softLoginValue, { expires: expirationDate });
          dispatch(setSoftLoginName(softLoginValue));
        }
        return;
      }
      if (cookies.softLogin) {
        dispatch(setSoftLoginName(cookies.softLogin));
      }
    };
    validateAccessToken();
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
