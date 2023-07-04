import { ReactNode } from 'react';

export type LoginStep = {
  Methods: ReactNode;
  UserPassword: ReactNode;
  Email: ReactNode;
  EmailCode: ReactNode;
  EmailSetPassword: ReactNode;
  SetPassword: ReactNode;
};

export enum LoginProviders {
  USER_PASSWORD = 'UserPassword',
  EMAIL = 'Email',
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
}

export type LoginMethods = {
  provider: LoginProviders;
  step: keyof LoginStep;
  url?: string;
};

export type AuthCookie = {
  name: string;
  value: string;
  expires: number;
};
