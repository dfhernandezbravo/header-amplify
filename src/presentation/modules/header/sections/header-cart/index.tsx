import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { HeaderCartSection } from '@modules/header/styles/header.styles';
import { openCategories } from '@store/category/slices/category-slice';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const HeaderCart = () => {
  const { quantity } = useAppSelector((state) => state.shoppingCartHeader);
  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClickCart = () => {
    dispatch(openCategories(false));
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click',
      tag: 'Mini cart',
    });

    customDispatchEvent({
      name: WindowsEvents.TOGGLE_CART_ASIDE,
      detail: { open: true },
    });
  };

  return (
    <HeaderCartSection>
      <Cart quantity={quantity} onClick={handleOnClickCart} />
    </HeaderCartSection>
  );
};

export default HeaderCart;
