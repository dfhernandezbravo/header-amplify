import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React, { useEffect } from 'react';
import { ModalCategory, ModalContent } from './styles';
import CategoriesDesktop from './layouts/categories-desktop';
import CategoriesMobile from './layouts/categories-mobile';
import { openCategories } from '@store/category/slices/category-slice';

const HeaderCategory = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(openCategories(false));
      }
    };

    if (isOpenCategories) {
      document.body.classList.add('header-footer-open-modal');
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.body.classList.remove('header-footer-open-modal');
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.body.classList.remove('header-footer-open-modal');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpenCategories, dispatch]);

  if (!isOpenCategories) {
    return null;
  }

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement | MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <ModalCategory onClick={() => dispatch(openCategories(!isOpenCategories))}>
      <ModalContent onClick={handleContentClick}>
        <CategoriesDesktop />
        <CategoriesMobile />
      </ModalContent>
    </ModalCategory>
  );
};

export default HeaderCategory;
