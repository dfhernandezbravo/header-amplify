import { ReactNode } from 'react';

export type LoginStep = {
  Methods: ReactNode;
  UserPassword: ReactNode;
  Email: ReactNode;
  EmailCode: ReactNode;
  EmailSetPassword: ReactNode;
  SetPassword: ReactNode;
  createAccountEmail: ReactNode;
  creadAccountUserPassword: ReactNode;
  sendUserCode: ReactNode;
};

export enum LoginProviders {
  USER_PASSWORD = 'UserPassword',
  EMAIL = 'Email',
}

export enum SocialProviders {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
}

export type LoginMethods = {
  provider: LoginProviders;
  step: keyof LoginStep;
};

export type SocialLogin = {
  providerName: SocialProviders;
  url: string;
};

export type AuthCookie = {
  name: string;
  value: string;
  expires: number;
};
