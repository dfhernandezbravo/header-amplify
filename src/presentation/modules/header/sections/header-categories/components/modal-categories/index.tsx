import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import getCategories from '@use-cases/category/get-categories';
import { useQuery } from 'react-query';
import CategoriesDrawer from './components/categories-drawer';
import CategoriesDesktop from './layouts/categories-desktop';
import CategoriesMobile from './layouts/categories-mobile';
import { closeCategories } from '@store/category/slices/category-slice';

const ModalCategories = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { data: categories } = useQuery(['get-categories'], getCategories);

  const closeModal = () => dispatch(closeCategories());

  if (!categories) return null;

  return (
    <CategoriesDrawer onClose={closeModal} isOpen={isOpenCategories}>
      <CategoriesDesktop categories={categories} />
      <CategoriesMobile categories={categories} />
    </CategoriesDrawer>
  );
};

export default ModalCategories;
