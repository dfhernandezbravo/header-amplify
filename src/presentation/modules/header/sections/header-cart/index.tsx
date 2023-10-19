import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { openCategories } from '@store/category/slices/category-slice';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import useAnalyticsHeaderCart from './analytics';

const HeaderCart = () => {
  const { quantity } = useAppSelector((state) => state.shoppingCartHeader);
  const dispatch = useAppDispatch();
  const { sendAnalyticsOnClickCart } = useAnalyticsHeaderCart();

  const handleOnClickCart = () => {
    dispatch(openCategories(false));
    sendAnalyticsOnClickCart();

    customDispatchEvent({
      name: WindowsEvents.TOGGLE_CART_ASIDE,
      detail: { open: true },
    });
  };

  return <Cart quantity={quantity} onClick={handleOnClickCart} />;
};

export default HeaderCart;
