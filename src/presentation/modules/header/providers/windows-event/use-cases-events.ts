import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { useAppDispatch } from '@hooks/storeHooks';
import { setCustomer } from '@store/customer/slices/customer-slice';
import {
  setCartId,
  setShoppingCart,
} from '@store/shopping-cart/slices/shopping-cart-slice';

export const useCaseEvents = () => {
  const dispatch = useAppDispatch();

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
    dispatch(
      setCustomer({
        id: shoppingCart.customer.userId,
        firstName: shoppingCart.customer.firstName,
        lastName: shoppingCart.customer.lastName,
        email: shoppingCart.customer.email,
        phone: shoppingCart.customer.phone,
        document: shoppingCart.customer.document,
        userId: shoppingCart.customer.userId,
        documentType: shoppingCart.customer.documentType,
        isEmployee: shoppingCart.customer.isEmployee,
      }),
    );
  };

  return {
    handleGetCartId,
    handleGetShoppingCart,
  };
};
