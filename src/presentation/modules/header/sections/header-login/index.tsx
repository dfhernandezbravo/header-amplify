import React, { useState } from 'react';
import Image from 'next/image';
import Mobile from '@components/layout/mobile';
import Desktop from '@components/layout/desktop';
import {
  LoginContainer,
  LoginContainerDesktop,
  LoginInformation,
  LoginMenu,
  LoginUser,
  MenuItem,
} from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { openModalLogin } from '@store/login/slices/login-slice';

const HeaderLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(openModalLogin());
  };

  return (
    <LoginContainer
      onMouseOver={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Mobile>
        <button onClick={handleClickItem}>Inicia Sesión</button>
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
              <span>¡Hola!</span>
              <strong>Inicia sesión</strong>
            </LoginUser>
          </LoginInformation>

          {isMenuOpen && (
            <LoginMenu isVisible={isMenuOpen}>
              <MenuItem onClick={handleClickItem}>Crear / Ingresar</MenuItem>
            </LoginMenu>
          )}
        </LoginContainerDesktop>
      </Desktop>
    </LoginContainer>
  );
};

export default HeaderLogin;
