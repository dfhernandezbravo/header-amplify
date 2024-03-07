import { useEffect } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const { customer } = useAppSelector((state) => state.customer);
  const [_cookie, setCookie, removeCookie] = useCookies(['SoftLogin']);

  useEffect(() => {
    if (customer && shoppingCart?.loggedIn) {
      const { firstName } = customer;
      setCookie('SoftLogin', firstName, {
        maxAge: 31536000,
      });
      return;
    }
    if (!shoppingCart?.loggedIn) removeCookie('SoftLogin');
  }, [customer, shoppingCart]);

  return <>{children}</>;
};

export default CookiesProvider;
