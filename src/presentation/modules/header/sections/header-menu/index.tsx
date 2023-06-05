import { MenuCategories } from '@modules/header/styles/header.styles';
import React from 'react';

const HeaderMenu = () => {
  return (
    <MenuCategories data-mobile="true">
      <div className="menuHamburg">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Menú</p>
    </MenuCategories>
  );
};

export default HeaderMenu;
