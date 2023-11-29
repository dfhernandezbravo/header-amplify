import { ShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { createSlice } from '@reduxjs/toolkit';
import getShoppingCart from '@use-cases/shopping-cart/get-shopping-cart';

type ShoppingCartState = ShoppingCart & {
  isShoppingCartUsed: boolean;
  quantity: number;
};

const initialState: ShoppingCartState = {
  orderFormId: undefined,
  isShoppingCartUsed: false,
  quantity: 0,
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
    setOrderFormId: (state, { payload }: { payload: string }) => {
      console.log('updating orderFormId', payload);
      state.orderFormId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShoppingCart.fulfilled, (state, { payload }) => {
      console.log('updating orderFormId', payload.orderFormId);
      state.orderFormId = payload.orderFormId;
    });
  },
});

export const { setShoppingCartUse, setQuantity, setOrderFormId } =
  shoppingCartSlice.actions;

export default shoppingCartSlice;
