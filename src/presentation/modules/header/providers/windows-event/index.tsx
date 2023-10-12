import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import {
  setQuantity,
  setShoppingCartUse,
} from '@store/shopping-cart/slices/shopping-cart-slice';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const WindowsEventProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { orderFormId } = useAppSelector((state) => state.shoppingCartHeader);

  useEffect(() => {
    document.addEventListener(WindowsEvents.CART_HEADER, (event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<{
        isShoppingCartUsed?: boolean;
        quantityItems?: number;
      }>;
      if (customEvent.detail.quantityItems) {
        dispatch(setQuantity(customEvent.detail.quantityItems));
      }
      if (customEvent.detail.isShoppingCartUsed) {
        dispatch(setShoppingCartUse(customEvent.detail.isShoppingCartUsed));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.CART_HEADER,
      detail: { cartId: orderFormId },
    });
    customDispatchEvent({
      name: WindowsEvents.CART_ID,
      detail: { cartId: orderFormId },
    });
  }, [orderFormId, dispatch]);

  return <>{children}</>;
};

export default WindowsEventProvider;
