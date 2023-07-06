import {
  AuthCookie,
  LoginMethods,
  LoginProviders,
  LoginStep,
} from '@entities/login/login.entity';
import { createSlice } from '@reduxjs/toolkit';
import login from '@use-cases/login/login';
import logout from '@use-cases/login/logout';
import setPassword from '@use-cases/login/set-password';
import validateAccessKey from '@use-cases/login/validate-access-key';

type LoginState = {
  isOpenModalLogin: boolean;
  isLoading: boolean;
  isLogged: boolean;
  loginStep: keyof LoginStep;
  loginMethods: LoginMethods[];
  authCookies: AuthCookie[];
  userEmail: string;
};

const initialState: LoginState = {
  isOpenModalLogin: false,
  isLoading: false,
  isLogged: false,
  loginStep: 'Methods',
  authCookies: [],
  userEmail: '',
  loginMethods: [
    {
      provider: LoginProviders.EMAIL,
      step: 'Email',
    },
    {
      provider: LoginProviders.USER_PASSWORD,
      step: 'UserPassword',
    },
  ],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openModalLogin: (state) => {
      state.isOpenModalLogin = true;
    },
    closeModalLogin: (state) => {
      state.isOpenModalLogin = false;
      state.loginStep = 'Methods';
    },
    navigateTo: (state, { payload }: { payload: keyof LoginStep }) => {
      state.loginStep = payload;
    },
    setEmail: (state, { payload }: { payload: string }) => {
      state.userEmail = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPassword.fulfilled, (state, { payload }) => {
        state.authCookies = payload || [];
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
      })
      .addCase(setPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
        state.authCookies = payload || [];
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateAccessKey.fulfilled, (state, { payload }) => {
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
        state.authCookies = payload || [];
      })
      .addCase(validateAccessKey.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.authCookies = payload;
      });
  },
});

export const { openModalLogin, closeModalLogin, navigateTo, setEmail } =
  loginSlice.actions;

export default loginSlice;
