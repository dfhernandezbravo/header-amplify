import { SocialLoginRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';
import { setError } from '@store/error/slices/error-slice';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const socialLogin = createAsyncThunk(
  'social-login-google',
  async (
    dataRequest: SocialLoginRequest,
    { dispatch, fulfillWithValue, rejectWithValue },
  ) => {
    try {
      dispatch(setError(null));
      const { data } = await loginService.socialLogin(dataRequest);
      return data.url;
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);

      dispatch(setError(errorApp));
      return rejectWithValue(error);
    }
  },
);

export default socialLogin;
