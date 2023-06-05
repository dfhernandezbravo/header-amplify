import Cart from '@components/atoms/cartButton';
// import useEventListener from '@hooks/eventListenerHooks';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { HeaderCartSection } from '@modules/header/styles/header.styles';
import cartSlice from '@store/cart';
import { CartItemModel } from '@store/cart/cart.type';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import React, { useEffect, useState } from 'react';

const HeaderCart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [quantityOnCart, setQuantityOnCart] = useState<number>(0);
  const { setAddProductInCart, setRemoveProductInCart } = cartSlice.actions;

  // methods
  const methods = {
    initialize: () => {
      // if (typeof window !== 'undefined') {
      //   useEventListener(
      //     document,
      //     'ADD_PRODUCT_IN_CART',
      //     methods.handleAddNewProductEvent,
      //   );
      //   useEventListener(
      //     document,
      //     'REMOVE_PRODUCT_FROM_CART',
      //     methods.handleRemoveProductEvent,
      //   );
      // }
    },
    handleAddNewProductEvent: (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent;
      dispatch(setAddProductInCart(customEvent.detail));
    },
    handleRemoveProductEvent: (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent;
      dispatch(setRemoveProductInCart(customEvent.detail));
    },
    handleOnClickCart: () => {
      console.log('dispatch TOGGLE_CART_ASIDE');
      customDispatchEvent({
        name: 'TOGGLE_CART_ASIDE',
        detail: { open: true },
      });
    },
  };
  methods.initialize();

  // on load cart
  useEffect(() => {
    setQuantityOnCart(
      cartItems?.reduce(
        (acc: number, cur: CartItemModel) => acc + (cur?.quantity || 0) || 0,
        0,
      ),
    );
  }, [cartItems]);

  return (
    <HeaderCartSection>
      <Cart quantity={quantityOnCart} onClick={methods.handleOnClickCart} />
    </HeaderCartSection>
  );
};

export default HeaderCart;
