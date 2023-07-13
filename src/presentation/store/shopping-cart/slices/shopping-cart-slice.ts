import { createSlice } from '@reduxjs/toolkit';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';

type ShoppingCartState = ShoppingCart & {
  isShoppingCartUsed: boolean;
  quantity: number
};

const initialState: ShoppingCartState = {
  orderFormId: undefined,
  isShoppingCartUsed: false,
  quantity: 0
};

const shoppingCartSlice = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    setShoppingCartUse: (state, { payload }: { payload: boolean }) => {
      state.isShoppingCartUsed = payload;
    },
    setQuantity: (state, { payload }) => {
      state.quantity = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getShoppingCart.fulfilled, (state, { payload }) => {
      state.orderFormId = payload.orderFormId;
    });
  },
});

export const { setShoppingCartUse, setQuantity } = shoppingCartSlice.actions;

export default shoppingCartSlice;
