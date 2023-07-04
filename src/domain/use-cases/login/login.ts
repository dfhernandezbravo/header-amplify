import { LoginRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const login = createAsyncThunk('login', async (dataRequest: LoginRequest) => {
  try {
    const { data } = await loginService.login(dataRequest);
    return data.authCookies;
  } catch (error) {
    console.error(error);
  }
});

export default login;
