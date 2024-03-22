import { Customer } from '@entities/customer/customer.entity';
import { useAppDispatch } from '@hooks/storeHooks';
import { LOGIN_COOKIES } from '@infra/cookies';
import useHandleLogout from '@modules/header/hooks/use-handle-logout';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { Cookies } from 'react-cookie';
import { LoginMenuContainer, LogoutItem, MenuItem } from './style';

interface Props {
  isMenuOpen: boolean;
  customer: Customer | null;
  handleLogin: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const LoginMenu = ({ isMenuOpen, customer, handleLogin }: Props) => {
  const cookies = new Cookies();
  const softLoginName = cookies.get(LOGIN_COOKIES.SOFT_LOGIN);
  const dispatch = useAppDispatch();
  const { onClickLogout } = useHandleLogout();

  const handleLogout = () => {
    onClickLogout();
    dispatch(setCustomer(null));
  };

  if (!customer && softLoginName) {
    return (
      <LoginMenuContainer isVisible={isMenuOpen}>
        <MenuItem href="" onClick={(event) => handleLogin(event)}>
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
          <MenuItem href="/account/bank-account">Mi cuenta bancaria</MenuItem>
          <MenuItem href="/account/addresses">Mis Direcciones</MenuItem>
          <MenuItem href="/account/purchases">Mis Compras</MenuItem>
          <MenuItem href="/account/favorites">Mis Favoritos</MenuItem>
          <LogoutItem onClick={() => handleLogout()}>Cerrar sesión</LogoutItem>
        </LoginMenuContainer>
      )}
    </>
  );
};

export default LoginMenu;
