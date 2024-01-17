export type LoginRequest = {
  user: string;
  password: string;
  orderFormId?: string;
};

export type GenerateAccessKeyRequest = {
  email: string;
};

export type ValidateAccessKeyRequest = {
  email: string;
  accessKey: string;
};

export type SetPasswordRequest = {
  email: string;
  newPassword: string;
  accessKey: string;
};

export type GenerateTokenRequest = {
  checkoutAuth: string;
};

export type SocialLoginRequest = {
  providerName: string;
  callback: string;
};
