import { useRouter } from 'next/router';
import OfferLink from './components/offer-link';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useBreakpoints from '@hooks/useBreakpoints';
import {
  closeCategories,
  openCategories,
} from '@store/category/slices/category-slice';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu2Fill } from 'react-icons/ri';
import useCategoriesAnalytics from '../../analytics/categories-analytics';
import {
  IconCloseContainer,
  MenuContainer,
  OpenedCategoriesHeader,
} from './styles';

const MenuIcon = () => {
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { eventOnClickMenuIcon } = useCategoriesAnalytics();
  const { device } = useBreakpoints();
  const { pathname } = useRouter();

  const handleOnClick = async (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>,
  ) => {
    event.stopPropagation();
    eventOnClickMenuIcon(pathname);
    isOpenCategories ? dispatch(closeCategories()) : dispatch(openCategories());
  };

  return (
    <MenuContainer onClick={(e) => handleOnClick(e)}>
      <div>
        {isOpenCategories ? (
          <OpenedCategoriesHeader>
            {device === 'Desktop' && (
              <div>
                <RiMenu2Fill color="white" size={20} />
                <span>Categorías</span>
              </div>
            )}
            <IconCloseContainer>
              <AiOutlineClose size={25} />
            </IconCloseContainer>
            {(device === 'Phone' || device === 'Tablet') && <span>Cerrar</span>}
          </OpenedCategoriesHeader>
        ) : (
          <IconCloseContainer>
            <RiMenu2Fill color="white" size={20} />
          </IconCloseContainer>
        )}
        <span>{device === 'Desktop' ? 'Categorías' : 'Menú'}</span>
      </div>

      {device === 'Desktop' && <OfferLink />}
    </MenuContainer>
  );
};

export default MenuIcon;
