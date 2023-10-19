import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openCategories } from '@store/category/slices/category-slice';
import CategoriesDrawer from './components/categories-drawer';
import CategoriesDesktop from './layouts/categories-desktop';
import CategoriesMobile from './layouts/categories-mobile';

const HeaderCategory = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(openCategories(!isOpenCategories));

  if (!isOpenCategories) {
    return null;
  }

  return (
    <CategoriesDrawer onClose={onClose} isOpen={isOpenCategories}>
      <CategoriesDesktop />
      <CategoriesMobile />
    </CategoriesDrawer>
  );
};

export default HeaderCategory;
