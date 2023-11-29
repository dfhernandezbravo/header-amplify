export type LoginRequest = {
  user: string;
  password: string;
  orderFormId?: string;
};

export type GenerateAccessKeyRequest = {
  userEmail: string;
};

export type ValidateAccessKeyRequest = {
  userEmail: string;
  accessKey: string;
  orderFormId?: string;
};

export type SetPasswordRequest = {
  user: string;
  newPassword: string;
  accessKey: string;
  orderFormId?: string;
};

export type GenerateTokenRequest = {
  checkoutAuth: string;
};

export type SocialLoginRequest = {
  providerName: string;
  callback: string;
};
