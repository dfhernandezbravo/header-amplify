import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import useAnalyticsHeaderCart from './analytics';
import { closeCategories } from '@store/category/slices/category-slice';
import { useEffect, useState } from 'react';

const HeaderCart = () => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const dispatch = useAppDispatch();
  const { sendAnalyticsOnClickCart } = useAnalyticsHeaderCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (shoppingCart) {
      const totalQuantity = shoppingCart.items.reduce(
        (accumulator, current) => accumulator + current.quantity,
        0,
      );
      setQuantity(totalQuantity);
    }
  }, [shoppingCart]);

  const handleOnClickCart = () => {
    dispatch(closeCategories());
    sendAnalyticsOnClickCart();

    customDispatchEvent({
      name: WindowsEvents.TOGGLE_CART_ASIDE,
      detail: { open: true },
    });
  };

  return <Cart quantity={quantity} onClick={handleOnClickCart} />;
};

export default HeaderCart;
