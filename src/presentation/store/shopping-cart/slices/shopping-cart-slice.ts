import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { createSlice } from '@reduxjs/toolkit';

type ShoppingCartState = {
  cartId: string;
  isShoppingCartUsed: boolean;
  quantity: number;
  shoppingCart: ShoppingCart | null;
};

const initialState: ShoppingCartState = {
  cartId: '',
  isShoppingCartUsed: false,
  quantity: 0,
  shoppingCart: null,
};

const shoppingCartSlice = createSlice({
  name: 'shopping-cart-header',
  initialState,
  reducers: {
    setShoppingCartUse: (state, { payload }: { payload: boolean }) => {
      state.isShoppingCartUsed = payload;
    },
    setQuantity: (state, { payload }) => {
      state.quantity = payload;
    },
    setCartId: (state, { payload }: { payload: string }) => {
      state.cartId = payload;
    },
    setShoppingCart: (state, { payload }: { payload: ShoppingCart }) => {
      state.shoppingCart = payload;
    },
  },
});

export const { setShoppingCartUse, setQuantity, setCartId, setShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice;
