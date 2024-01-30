import React from 'react';
import HeaderLoginMobile from '../../../../../../../header-login/layouts/mobile';
import { UserMenuContainer } from './styles';
import UserMenuItem from '../user-menu-item';

const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserMenuItem
        link="/"
        image="/icons/header/offer-gray-icon.svg"
        text="Ofertas"
      />
      <HeaderLoginMobile />
      <UserMenuItem
        link="https://ayuda.easy.cl/ayuda/"
        image="/icons/header/help-icon.svg"
        text="Centro de ayuda"
      />
    </UserMenuContainer>
  );
};

export default UserMenu;
