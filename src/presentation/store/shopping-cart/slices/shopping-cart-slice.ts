import { createSlice } from '@reduxjs/toolkit';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';

type ShoppingCartState = ShoppingCart & {
  isShoppingCartUsed: boolean;
};

const initialState: ShoppingCartState = {
  orderFormId: undefined,
  isShoppingCartUsed: false,
};

const shoppingCartSlice = createSlice({
  name: 'shopping-cart',
  initialState,
  reducers: {
    setShoppingCartUse: (state, { payload }: { payload: boolean }) => {
      state.isShoppingCartUsed = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShoppingCart.fulfilled, (state, { payload }) => {
      state.orderFormId = payload.orderFormId;
    });
  },
});

export const { setShoppingCartUse } = shoppingCartSlice.actions;

export default shoppingCartSlice;
