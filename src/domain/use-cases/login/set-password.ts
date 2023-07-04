import { SetPasswordRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const setPassword = createAsyncThunk(
  'login/set-password',
  async (dataRequets: SetPasswordRequest) => {
    try {
      const { data } = await loginService.setPassword(dataRequets);
      return data.authCookies;
    } catch (error) {
      console.error(error);
    }
  },
);

export default setPassword;
