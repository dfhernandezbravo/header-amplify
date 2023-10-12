import { Customer } from '@entities/customer/customer.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openCategories } from '@store/category/slices/category-slice';
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
    dispatch(openCategories(false));
    dispatch(openModalLogin());
  };

  return (
    <LoginMenuContainer isVisible={isMenuOpen}>
      {customer ? (
        <LoginMenuContainer isVisible={isMenuOpen}>
          <MenuItem href="https://www.easy.cl/micuenta#/profile">
            Mis Datos
          </MenuItem>
          <MenuItem href="https://www.easy.cl/micuenta#/cards">
            Mis Tarjetas
          </MenuItem>
          <MenuItem href="https://www.easy.cl/micuenta#/addresses">
            Mis Direcciones
          </MenuItem>
          <MenuItem href="https://ayuda.easy.cl/mis-compras?">
            Mis Compras
          </MenuItem>
          <MenuItem href="https://www.easy.cl/micuenta#/wishlist">
            Mis Favoritos
          </MenuItem>
          <MenuItem last href="" onClick={() => dispatch(logout(authCookies))}>
            Salir
          </MenuItem>
        </LoginMenuContainer>
      ) : (
        <MenuItem href="" onClick={handleClickItem}>
          Crear / Ingresar
        </MenuItem>
      )}
    </LoginMenuContainer>
  );
};

export default LoginMenu;
