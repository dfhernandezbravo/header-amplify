import { WindowsEvents } from '@events/index';
import { useAppDispatch } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { openModalLogin } from '@store/login/slices/login-slice';
import React, { useEffect } from 'react';
import { useCaseEvents } from './use-cases-events';

interface Props {
  children: React.ReactNode;
}

const WindowsEventProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { handleGetShoppingCart, handleGetCartId, handleGetProfile } =
    useCaseEvents();

  useEffect(() => {
    document.addEventListener(WindowsEvents.GET_CART_ID, handleGetCartId);
    document.addEventListener(WindowsEvents.UPDATE_PROFILE, handleGetProfile);

    window.addEventListener(
      WindowsEvents.GET_SHOPPING_CART,
      handleGetShoppingCart,
    );

    document.addEventListener(WindowsEvents.OPEN_LOGIN_MODAL, () => {
      dispatch(openModalLogin());
    });

    return () => {
      document.removeEventListener(WindowsEvents.GET_CART_ID, handleGetCartId);

      window.removeEventListener(
        WindowsEvents.GET_SHOPPING_CART,
        handleGetShoppingCart,
      );
    };
  }, [dispatch]);

  useEffect(() => {
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART_ID,
      detail: { origin: 'HEADER' },
    });
    customDispatchEvent({
      name: WindowsEvents.DISPATCH_GET_CART,
      detail: { origin: 'HEADER' },
    });
  }, []);

  return <>{children}</>;
};

export default WindowsEventProvider;
