export type LoginRequest = {
  user: string;
  password: string;
};

export type GenerateAccessKeyRequest = {
  userEmail: string;
};

export type ValidateAccessKeyRequest = {
  userEmail: string;
  accessKey: string;
};

export type SetPasswordRequest = {
  user: string;
  newPassword: string;
  accessKey: string;
};

export type GenerateTokenRequest = {
  checkoutAuth: string;
};
