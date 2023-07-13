import { LoginRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';
import { setError } from '@store/error/slices/error-slice';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const login = createAsyncThunk(
  'login',
  async (
    dataRequest: LoginRequest,
    { dispatch, fulfillWithValue, rejectWithValue },
  ) => {
    try {
      dispatch(setError(null));
      const { data } = await loginService.login(dataRequest);
      return fulfillWithValue(data.authCookies);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);

      dispatch(setError(errorApp));
      return rejectWithValue(error);
    }
  },
);

export default login;
