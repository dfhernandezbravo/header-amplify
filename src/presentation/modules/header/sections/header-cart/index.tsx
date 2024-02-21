import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import useAnalyticsHeaderCart from './analytics';
import { closeCategories } from '@store/category/slices/category-slice';
import { useEffect, useState } from 'react';
import { ShoppingCartItem } from '@cencosud-ds/easy-design-system';

const HeaderCart = () => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const dispatch = useAppDispatch();
  const { sendAnalyticsOnClickCart } = useAnalyticsHeaderCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (shoppingCart && shoppingCart.items?.length) {
      const totalQuantity = shoppingCart.items.reduce(
        (accumulator: number, current: ShoppingCartItem) =>
          accumulator + current.quantity,
        0,
      );
      setQuantity(totalQuantity);
    } else {
      setQuantity(0);
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
