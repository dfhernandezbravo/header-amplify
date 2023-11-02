import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useBreakpoints from '@hooks/useBreakpoints';
import {
  closeCategories,
  openCategories,
} from '@store/category/slices/category-slice';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useCategoriesAnalytics from '../../analytics/categories-analytics';
import { IconCloseContainer, IconMenuContainer, MenuContainer } from './styles';

const MenuIcon = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { eventOnClickMenuIcon } = useCategoriesAnalytics();
  const { device } = useBreakpoints();
  const { pathname } = useRouter();

  const handleOnClick = () => {
    eventOnClickMenuIcon(pathname);
    isOpenCategories ? dispatch(closeCategories()) : dispatch(openCategories());
  };

  return (
    <MenuContainer onClick={handleOnClick}>
      {isOpenCategories ? (
        <IconMenuContainer>
          <AiOutlineClose size={30} />
        </IconMenuContainer>
      ) : (
        <IconCloseContainer>
          <AiOutlineMenu size={30} />
        </IconCloseContainer>
      )}

      <span>{device === 'Desktop' ? 'Categorías' : 'Menú'}</span>
    </MenuContainer>
  );
};

export default MenuIcon;
