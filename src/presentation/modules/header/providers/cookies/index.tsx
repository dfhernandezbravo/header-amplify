import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/storeHooks';
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
        if ((response.payload as Customer)?.firstName) {
          const currentDate = new Date();
          const expirationDate = new Date(
            currentDate.getFullYear() + 1,
            currentDate.getMonth(),
            currentDate.getDate(),
          );
          const softLoginValue = (response.payload as Customer).firstName;
          setCookies('softLogin', softLoginValue, { expires: expirationDate });
        }
      }
    };

    validateAccessToken();
  }, [cookies.accessToken, cookies.softLogin, dispatch]);

  return <>{children}</>;
};

export default CookiesProvider;
