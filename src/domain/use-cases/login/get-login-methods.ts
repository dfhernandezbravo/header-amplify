import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const getLoginMethods = createAsyncThunk('login/methods', async () => {
  try {
    const { data } = await loginService.getLoginMethods();
    return data;
  } catch (error) {
    return [];
  }
});

export default getLoginMethods;
