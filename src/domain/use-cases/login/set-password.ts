import { SetPasswordRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';
import { setError } from '@store/error/slices/error-slice';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const setPassword = createAsyncThunk(
  'login/set-password',
  async (
    dataRequets: SetPasswordRequest,
    { dispatch, fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const { data } = await loginService.setPassword(dataRequets);
      return fulfillWithValue(data.authCookies);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);

      dispatch(setError(errorApp));
      return rejectWithValue(errorApp);
    }
  },
);

export default setPassword;
