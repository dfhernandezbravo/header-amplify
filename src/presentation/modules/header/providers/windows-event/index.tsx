import { WindowsEvents } from '@events/index';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { openModalLogin } from '@store/login/slices/login-slice';
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

  const sendCartId = () => {
    customDispatchEvent({
      name: WindowsEvents.CART_ID,
      detail: { cartId: orderFormId },
    });
  };

  useEffect(() => {
    sendCartId();
  }, [orderFormId]);

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

    document.addEventListener(WindowsEvents.GET_CART_ID, () => {
      sendCartId();
    });

    document.addEventListener(WindowsEvents.OPEN_LOGIN_MODAL, () => {
      dispatch(openModalLogin());
    });
  }, [dispatch]);

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.CART_HEADER,
      detail: { cartId: orderFormId },
    });
  }, [orderFormId, dispatch]);

  return <>{children}</>;
};

export default WindowsEventProvider;
