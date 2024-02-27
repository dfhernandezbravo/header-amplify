import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import getCustomer from '@use-cases/customer/get-customer';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const ContainerProvider = ({ children }: Props) => {
  const { customer } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLogged && !customer) dispatch(getCustomer());
  }, [customer]);

  return <div>{children}</div>;
};

export default ContainerProvider;
