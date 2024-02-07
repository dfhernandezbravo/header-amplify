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

type CreateAccountFlow = 'create account' | 'forgot password' | null;

type LoginState = {
  isOpenModalLogin: boolean;
  isLoading: boolean;
  isLogged: boolean;
  loginStep: keyof LoginStep;
  loginMethods: LoginMethods[];
  socialMethods: SocialLogin[];
  authCookies: AuthCookie[];
  userEmail: string;
  userPassword: string;
  createAccountFlow: CreateAccountFlow;
  error: AppError | null;
};

const initialState: LoginState = {
  isOpenModalLogin: false,
  isLoading: false,
  isLogged: false,
  loginStep: 'Methods',
  authCookies: [],
  userEmail: '',
  userPassword: '',
  createAccountFlow: null,
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
    setPassword: (state, { payload }: { payload: string }) => {
      state.userPassword = payload;
    },
    setAuthCookies: (state, { payload }: { payload: AuthCookie[] }) => {
      state.authCookies = [...state.authCookies, ...payload];
    },
    setLogin: (state, { payload }: { payload: boolean }) => {
      state.isLogged = payload;
    },
    setLoginError: (state, { payload }: { payload: AppError | null }) => {
      state.error = payload;
    },
    setCreateAccountFlow: (
      state,
      { payload }: { payload: CreateAccountFlow },
    ) => {
      state.createAccountFlow = payload;
    },
  },
  // use cases
  extraReducers: (builder) => {
    builder.addCase(getLoginMethods.fulfilled, (state, { payload }) => {
      state.socialMethods = payload;
    });
  },
});

export const {
  openModalLogin,
  closeModalLogin,
  navigateTo,
  setEmail,
  setPassword,
  setLogin,
  setAuthCookies,
  setLoginError,
  setCreateAccountFlow,
} = loginSlice.actions;

export default loginSlice;
