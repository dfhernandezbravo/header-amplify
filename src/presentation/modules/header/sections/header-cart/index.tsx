import Cart from '@components/atoms/cartButton';
import { WindowsEvents } from '@events/index';
import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { HeaderCartSection } from '@modules/header/styles/header.styles';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import React from 'react';

const HeaderCart = () => {
  const { quantity } = useAppSelector((state) => state.shoppingCart);
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClickCart = () => {
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
