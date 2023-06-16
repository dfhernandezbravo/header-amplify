import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { ModalCategory, ModalContent } from './styles';
import CategoriesDesktop from './layouts/categories-desktop';
import CategoriesMobile from './layouts/categories-mobile';
import { openCategories } from '@store/category/slices/category-slice';

const HeaderCategory = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispacth = useAppDispatch();

  if (!isOpenCategories) {
    return null;
  }

  return (
    <ModalCategory onClick={() => dispacth(openCategories(!isOpenCategories))}>
      <ModalContent>
        <CategoriesDesktop />
        <CategoriesMobile />
      </ModalContent>
    </ModalCategory>
  );
};

export default HeaderCategory;
