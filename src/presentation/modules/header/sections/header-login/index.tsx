import React, { useState } from 'react';
import Image from 'next/image';
import Mobile from '@components/layout/mobile';
import Desktop from '@components/layout/desktop';
import {
  LoginButtonContainerDesktop,
  LoginContainer,
  LoginContainerDesktop,
  LoginInformation,
  LoginMenu,
  LoginMobileButton,
  LoginUser,
  MenuItem,
} from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openModalLogin } from '@store/login/slices/login-slice';
import logout from '@use-cases/login/logout';
import { IoIosArrowDown } from 'react-icons/io';
import { openCategories } from '@store/category/slices/category-slice';

const HeaderLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { customer } = useAppSelector((state) => state.customer);
  const { authCookies } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(openCategories(false));
    dispatch(openModalLogin());
  };

  return (
    <LoginContainer
      onMouseOver={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Mobile>
        <LoginMobileButton href="https://www.easy.cl/micuenta#/">
          {customer ? (
            <span>
              Hola <br /> {customer.firstName}
            </span>
          ) : (
            <span>Inicia Sesión</span>
          )}
        </LoginMobileButton>
      </Mobile>

      <Desktop>
        <LoginContainerDesktop>
          <LoginInformation>
            <Image
              src="https://easycl.vtexassets.com/arquivos/new-desktop-user-icon.svg"
              width={25}
              height={25}
              alt="User Icon"
            />

            <LoginUser>
              <span>¡Hola{customer ? ` ${customer?.firstName}` : ''}!</span>
              <LoginButtonContainerDesktop>
                <strong>{customer ? 'Mi cuenta' : 'Inicia Sesión'}</strong>
                {customer && <IoIosArrowDown />}
              </LoginButtonContainerDesktop>
            </LoginUser>
          </LoginInformation>

          {isMenuOpen && !customer && (
            <LoginMenu isVisible={isMenuOpen}>
              <MenuItem href="" onClick={handleClickItem}>
                Crear / Ingresar
              </MenuItem>
            </LoginMenu>
          )}

          {isMenuOpen && customer && (
            <LoginMenu isVisible={isMenuOpen}>
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
              <MenuItem
                last
                href=""
                onClick={() => dispatch(logout(authCookies))}
              >
                Salir
              </MenuItem>
            </LoginMenu>
          )}
        </LoginContainerDesktop>
      </Desktop>
    </LoginContainer>
  );
};

export default HeaderLogin;
