import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';
import CategoriesDrawer from './components/categories-drawer';
import CategoriesDesktop from './layouts/categories-desktop';
import CategoriesMobile from './layouts/categories-mobile';

const ModalCategories = () => {
  const { isOpenCategories, categories } = useAppSelector(
    (state) => state.category,
  );
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(closeCategories());

  return (
    <CategoriesDrawer onClose={closeModal} isOpen={isOpenCategories}>
      <CategoriesDesktop categories={categories} />
      <CategoriesMobile categories={categories} />
    </CategoriesDrawer>
  );
};

export default ModalCategories;
