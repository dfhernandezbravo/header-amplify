import Desktop from '@components/layout/desktop';
import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openCategories } from '@store/category/slices/category-slice';
import getCategories from '@use-cases/category/get-categories';
import React, { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IconCloseContainer, IconMenuContainer, MenuContainer } from './styles';

const HeaderMenu = () => {
  const dispatch = useAppDispatch();
  const { isOpenCategories } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <MenuContainer onClick={() => dispatch(openCategories(!isOpenCategories))}>
      {isOpenCategories ? (
        <IconMenuContainer>
          <AiOutlineClose size={30} />
        </IconMenuContainer>
      ) : (
        <IconCloseContainer>
          <AiOutlineMenu size={30} />
        </IconCloseContainer>
      )}

      <Mobile>
        <span>Menú</span>
      </Mobile>

      <Desktop>
        <span>Categorías</span>
      </Desktop>
    </MenuContainer>
  );
};

export default HeaderMenu;
