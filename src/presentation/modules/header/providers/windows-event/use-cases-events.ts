import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { Customer } from '@entities/customer/customer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { setAddressSelected } from '@store/regionalizer/slices/regionalizer-slice';
import {
  setCartId,
  setShoppingCart,
} from '@store/shopping-cart/slices/shopping-cart-slice';

export const useCaseEvents = () => {
  const dispatch = useAppDispatch();
  const { addressSelected } = useAppSelector((state) => state.regionalizer);

  const handleGetCartId = (event: Event) => {
    event.preventDefault();
    const customEvent = event as CustomEvent<{ cartId: string }>;
    const {
      detail: { cartId },
    } = customEvent;
    dispatch(setCartId(cartId));
  };

  const handleGetShoppingCart = (event: Event) => {
    event.preventDefault();
    const customEvent = event as CustomEvent<{
      shoppingCart: ShoppingCart;
    }>;
    const {
      detail: { shoppingCart },
    } = customEvent;
    dispatch(setShoppingCart(shoppingCart));

    const addressShoppingCart = shoppingCart?.shipping?.selectedAddresses?.[0];
    if (
      addressShoppingCart &&
      !addressSelected &&
      !addressShoppingCart.neighborhood.includes('*')
    ) {
      dispatch(setAddressSelected(addressShoppingCart as AddressShoppingCart));
    }
  };
  const handleGetProfile = (event: Event) => {
    event.preventDefault();
    const customEvent = event as CustomEvent<Customer>;
    const { detail } = customEvent;
    dispatch(setCustomer(detail));
  };

  return {
    handleGetCartId,
    handleGetShoppingCart,
    handleGetProfile,
  };
};
