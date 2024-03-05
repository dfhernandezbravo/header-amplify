import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';
import { setCustomer } from '@store/customer/slices/customer-slice';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const [_cookie, setCookie, removeCookie] = useCookies(['SoftLogin']);

  useEffect(() => {
    if (shoppingCart?.loggedIn) {
      const firstName = shoppingCart?.customer?.firstName || '';
      setCookie('SoftLogin', firstName, {
        maxAge: 31536000,
      });
    } else {
      dispatch(setCustomer(null));
      removeCookie('SoftLogin');
    }
  }, [shoppingCart]);

  return <>{children}</>;
};

export default CookiesProvider;
