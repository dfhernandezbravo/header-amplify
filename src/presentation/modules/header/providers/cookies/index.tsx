import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';
import { setCustomer } from '@store/customer/slices/customer-slice';

interface Props {
  children: React.ReactNode;
}

const CookiesProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  // const  { customer  } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const [_cookie, setCookie, removeCookie] = useCookies(['softLogin']);

  useEffect(() => {
    if (shoppingCart?.loggedIn) {
      // dispatch(getCustomer())
      const { firstName } = shoppingCart.customer;
      setCookie('softLogin', firstName);
    } else {
      dispatch(setCustomer(null));
      removeCookie('softLogin');
    }
  }, [shoppingCart]);

  return <>{children}</>;
};

export default CookiesProvider;
