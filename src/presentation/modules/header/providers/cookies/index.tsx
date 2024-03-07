import { useEffect } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';
import { LOGIN_COOKIES } from '@infra/cookies';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const { customer } = useAppSelector((state) => state.customer);
  const [_cookie, setCookie, removeCookie] = useCookies([
    LOGIN_COOKIES.SOFT_LOGIN,
  ]);

  useEffect(() => {
    if (customer && shoppingCart?.loggedIn) {
      const { firstName } = customer;
      setCookie(LOGIN_COOKIES.SOFT_LOGIN, firstName, {
        maxAge: 31536000,
      });
      return;
    }
    if (!shoppingCart?.loggedIn) removeCookie(LOGIN_COOKIES.SOFT_LOGIN);
  }, [customer, shoppingCart]);

  return <>{children}</>;
};

export default CookiesProvider;
