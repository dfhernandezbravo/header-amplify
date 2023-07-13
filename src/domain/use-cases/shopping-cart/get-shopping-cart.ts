import { createAsyncThunk } from '@reduxjs/toolkit';
import shoppingCartService from '@services/shopping-cart';
import { setError } from '@store/error/slices/error-slice';
import { setAuthCookies } from '@store/login/slices/login-slice';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const getShoppingCart = createAsyncThunk(
  'get/shopping-cart',
  async (_, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = await shoppingCartService.getShoppingCart();
      dispatch(setAuthCookies(data.cookies));

      return fulfillWithValue(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);
      dispatch(setError(errorApp));

      return rejectWithValue(errorApp);
    }
  },
);

export default getShoppingCart;
