import { CartItemModel } from '@/store/cart/cart.type';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartHeader',
  initialState: {
    cart: [] as CartItemModel[]
  },
  reducers: {
    setAddProductInCart: (state, { payload }) => {
      const currentProduct = state.cart?.find((pr: CartItemModel) => pr.id === payload.id);
      if (currentProduct) {
        const quantity = currentProduct?.quantity || 0;
        const removeCurrent = state.cart?.filter((pr: CartItemModel) => pr.id !== payload.id);
        if (removeCurrent?.length > 0) {
          state.cart = [...removeCurrent, { ...currentProduct, quantity: quantity + 1 }];
        } else {
          state.cart = [{ ...currentProduct, quantity: quantity + 1 }];
        }
      } else {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
      }
    },
    setRemoveProductInCart: (state, { payload }) => {
      const currentProduct = state.cart?.find((pr: CartItemModel) => pr.id === payload.id);
      if (currentProduct) {
        const quantity = currentProduct?.quantity || 0;
        const removeCurrent = state.cart?.filter((pr: CartItemModel) => pr.id !== payload.id);
        if (quantity > 1) {
          state.cart = [...removeCurrent, { ...currentProduct, quantity: quantity - 1 }];
        } else {
          state.cart = removeCurrent
        }
      } else {
        state.cart = payload
      }
    }
  }
});
export default cartSlice;