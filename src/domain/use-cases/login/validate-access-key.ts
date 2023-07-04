import { ValidateAccessKeyRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const validateAccessKey = createAsyncThunk(
  'login/validate-access-key',
  async (dataRequest: ValidateAccessKeyRequest) => {
    try {
      const { data } = await loginService.validateAccessKey(dataRequest);
      return data.authCookies;
    } catch (error) {
      console.error(error);
    }
  },
);

export default validateAccessKey;
