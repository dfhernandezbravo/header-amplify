import { Customer } from '@entities/customer/customer.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';
import { openModalLogin } from '@store/login/slices/login-slice';
import logout from '@use-cases/login/logout';
import { LoginMenuContainer, MenuItem } from './style';

interface Props {
  isMenuOpen: boolean;
  customer: Customer | null;
}

const LoginMenu = ({ isMenuOpen, customer }: Props) => {
  const { authCookies } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(closeCategories());
    dispatch(openModalLogin());
  };

  return (
    <LoginMenuContainer isVisible={isMenuOpen}>
      {customer ? (
        <>
          <MenuItem href="/account/profile">Mis Datos</MenuItem>
          <MenuItem href="/account/cards">Mis Tarjetas</MenuItem>
          <MenuItem href="/account/addresses">Mis Direcciones</MenuItem>
          <MenuItem href="/account/purchases">Mis Compras</MenuItem>
          <MenuItem href="/account/favorites">Mis Favoritos</MenuItem>
          <MenuItem last href="" onClick={() => dispatch(logout(authCookies))}>
            Salir
          </MenuItem>
        </>
      ) : (
        <MenuItem href="" onClick={handleClickItem}>
          Crear / Ingresar
        </MenuItem>
      )}
    </LoginMenuContainer>
  );
};

export default LoginMenu;
