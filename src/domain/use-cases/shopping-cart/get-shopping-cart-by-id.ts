import { createAsyncThunk } from "@reduxjs/toolkit";
import shoppingCartService from "@services/shopping-cart";

const getShoppingCartById = createAsyncThunk(
  "/cart/getCart",
  async (cartId: string) => {
    try {
      const { data } = await shoppingCartService.getShoppingCartById(cartId);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default getShoppingCartById;
