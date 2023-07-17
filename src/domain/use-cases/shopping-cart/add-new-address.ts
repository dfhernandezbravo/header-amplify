import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import shoppingCartService from '@services/shopping-cart';

type Params = {
  data: AddNewAddressRequest;
  cartId: string;
};

const addNewAddress = createAsyncThunk(
  'shopping-cart/address',
  async (params: Params) => {
    try {
      await shoppingCartService.addAddress(params.data, params.cartId);
      return params.data.selectedAddresses[0];
    } catch (error) {
      console.log(error);
    }
  },
);

export default addNewAddress;
