import Desktop from '@components/layout/desktop';
import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { openCategories } from '@store/category/slices/category-slice';
import getCategories from '@use-cases/category/get-categories';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IconCloseContainer, IconMenuContainer, MenuContainer } from './styles';

const HeaderMenu = () => {
  const dispatch = useAppDispatch();
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const { sendEventAnalytics } = useAnalytics();
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleOnClick = () => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click abrir menu',
      tag: pathname,
    });
    dispatch(openCategories(!isOpenCategories));
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
