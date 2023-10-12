import { useEffect } from 'react'
import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';

import { openCategories } from '@store/category/slices/category-slice';
import { customDispatchEvent } from '@store/events/dispatchEvents';

import getShoppingCartById from '@use-cases/shopping-cart/get-shopping-cart-by-id';

const HeaderCart = () => {
  const { quantity, orderFormId } = useAppSelector((state) => state.shoppingCartHeader);
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

  useEffect(() => {
    if(orderFormId) {
      dispatch(getShoppingCartById(orderFormId))
    }
  },[orderFormId])

  return (
    <Cart quantity={quantity} onClick={handleOnClickCart} />
  );
};

export default HeaderCart;
