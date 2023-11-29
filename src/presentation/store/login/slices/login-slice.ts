import { AppError } from '@entities/errors';
import {
  AuthCookie,
  LoginMethods,
  LoginProviders,
  LoginStep,
  SocialLogin,
  SocialProviders,
} from '@entities/login/login.entity';
import { createSlice } from '@reduxjs/toolkit';
import getLoginMethods from '@use-cases/login/get-login-methods';
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
  socialMethods: SocialLogin[];
  authCookies: AuthCookie[];
  userEmail: string;
  error: AppError | null;
};

const initialState: LoginState = {
  isOpenModalLogin: false,
  isLoading: false,
  isLogged: false,
  loginStep: 'Methods',
  authCookies: [],
  userEmail: '',
  error: null,
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
  socialMethods: [
    {
      providerName: SocialProviders.GOOGLE,
      url: '/',
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
    setAuthCookies: (state, { payload }: { payload: AuthCookie[] }) => {
      state.authCookies = [...state.authCookies, ...payload];
    },
    setLogin: (state, { payload }: { payload: boolean }) => {
      state.isLogged = payload;
    },
  },
  // use cases
  extraReducers: (builder) => {
    builder
      .addCase(setPassword.fulfilled, (state, { payload }) => {
        state.authCookies = [...state.authCookies, ...payload] || [];
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(setPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
        state.authCookies = [...state.authCookies, ...payload] || [];
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateAccessKey.fulfilled, (state, { payload }) => {
        state.isOpenModalLogin = false;
        state.loginStep = 'Methods';
        state.authCookies = [...state.authCookies, ...payload] || [];
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(validateAccessKey.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.authCookies = payload;
        state.isLogged = false;
      })
      .addCase(getLoginMethods.fulfilled, (state, { payload }) => {
        state.socialMethods = payload;
      });
  },
});

export const {
  openModalLogin,
  closeModalLogin,
  navigateTo,
  setEmail,
  setLogin,
  setAuthCookies,
} = loginSlice.actions;

export default loginSlice;
