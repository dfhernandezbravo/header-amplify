import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const getLoginMethods = createAsyncThunk('login/methods', async () => {
  try {
    const environment = process.env.NEXT_PUBLIC_ENV;
    if (environment === 'PRODUCTION') {
      return [];
    }
    const { data } = await loginService.getLoginMethods();
    return data;
  } catch (error) {
    return [];
  }
});

export default getLoginMethods;
