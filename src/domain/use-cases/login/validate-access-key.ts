import { ValidateAccessKeyRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';
import { setError } from '@store/error/slices/error-slice';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const validateAccessKey = createAsyncThunk(
  'login/validate-access-key',
  async (
    dataRequest: ValidateAccessKeyRequest,
    { dispatch, fulfillWithValue, rejectWithValue },
  ) => {
    try {
      const { data } = await loginService.validateAccessKey(dataRequest);
      return fulfillWithValue(data.authCookies);
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);

      dispatch(setError(errorApp));
      return rejectWithValue(errorApp);
    }
  },
);

export default validateAccessKey;
