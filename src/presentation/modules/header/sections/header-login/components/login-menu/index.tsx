import { Customer } from '@entities/customer/customer.entity';
import { LoginMenuContainer, MenuItem } from './style';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { useAppDispatch } from '@hooks/storeHooks';
import getCustomer from '@use-cases/customer/get-customer';
import { Cookies } from 'react-cookie';

interface Props {
  isMenuOpen: boolean;
  customer: Customer | null;
  handleLogin: () => void;
}

const LoginMenu = ({ isMenuOpen, customer, handleLogin }: Props) => {
  const cookies = new Cookies();
  const softLoginName = cookies.get('softLogin');
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    cookies.remove('softLogin');
    customDispatchEvent({ name: 'DISPATCH_LOGOUT', detail: {} });
    dispatch(getCustomer());
  };
  if (!customer && softLoginName) {
    return (
      <LoginMenuContainer isVisible={isMenuOpen}>
        <MenuItem href="" onClick={() => handleLogin()}>
          Inicia sesión
        </MenuItem>
      </LoginMenuContainer>
    );
  }

  return (
    <>
      {customer && (
        <LoginMenuContainer isVisible={isMenuOpen}>
          <MenuItem href="/account/profile">Mis Datos</MenuItem>
          <MenuItem href="/account/cards">Mis Tarjetas</MenuItem>
          <MenuItem href="/account/addresses">Mis Direcciones</MenuItem>
          <MenuItem href="/account/purchases">Mis Compras</MenuItem>
          <MenuItem href="/account/favorites">Mis Favoritos</MenuItem>
          <MenuItem last href="" onClick={onClickLogout}>
            Salir
          </MenuItem>
        </LoginMenuContainer>
      )}
    </>
  );
};

export default LoginMenu;
