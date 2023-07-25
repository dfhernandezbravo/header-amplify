import { AuthCookie } from '@entities/login/login.entity';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const logout = createAsyncThunk('logout', async (authCookies: AuthCookie[]) => {
  authCookies.forEach((cookie) => {
    Cookies.remove(cookie.name);
  });
  Cookies.remove('user');
  return [];
});

export default logout;
