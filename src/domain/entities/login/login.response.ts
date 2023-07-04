import { AuthCookie } from './login.entity';

export type LoginResponse = {
  authCookies: AuthCookie[];
};

export type GenerateTokenResponse = AuthCookie;
