import { Customer } from '@entities/customer/customer.entity';
import { LoginMenuContainer, MenuItem } from './style';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { useAppDispatch } from '@hooks/storeHooks';
import getCustomer from '@use-cases/customer/get-customer';

interface Props {
  isMenuOpen: boolean;
  customer: Customer | null;
}

const LoginMenu = ({ isMenuOpen, customer }: Props) => {
  const dispatch = useAppDispatch();
  const onClickLogout = () => {
    customDispatchEvent({ name: 'DISPATCH_LOGOUT', detail: {} });
    dispatch(getCustomer());
  };

  return (
    <LoginMenuContainer isVisible={isMenuOpen}>
      {customer && (
        <>
          <MenuItem href="/account/profile">Mis Datos</MenuItem>
          <MenuItem href="/account/cards">Mis Tarjetas</MenuItem>
          <MenuItem href="/account/addresses">Mis Direcciones</MenuItem>
          <MenuItem href="/account/purchases">Mis Compras</MenuItem>
          <MenuItem href="/account/favorites">Mis Favoritos</MenuItem>
          <MenuItem last href="" onClick={onClickLogout}>
            Salir
          </MenuItem>
        </>
      )}
    </LoginMenuContainer>
  );
};

export default LoginMenu;
