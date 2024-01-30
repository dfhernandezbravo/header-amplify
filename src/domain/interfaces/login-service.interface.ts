import { SocialLogin } from '@entities/login/login.entity';
import {
  GenerateAccessKeyRequest,
  GenerateTokenRequest,
  LoginRequest,
  SetPasswordRequest,
  SocialLoginRequest,
  ValidateAccessKeyRequest,
} from '@entities/login/login.request';
import {
  GenerateTokenResponse,
  LoginResponse,
  socialLoginResponse,
} from '@entities/login/login.response';
import { AxiosResponse } from 'axios';

export default interface LoginService {
  login(data: LoginRequest): Promise<AxiosResponse<LoginResponse>>;

  generateAccessKey(
    data: GenerateAccessKeyRequest,
  ): Promise<AxiosResponse<void>>;

  validateAccessKey(
    data: ValidateAccessKeyRequest,
  ): Promise<AxiosResponse<LoginResponse>>;

  setPassword(data: SetPasswordRequest): Promise<AxiosResponse<LoginResponse>>;

  generateToken(
    data: GenerateTokenRequest,
  ): Promise<AxiosResponse<GenerateTokenResponse>>;

  getLoginMethods(): Promise<AxiosResponse<SocialLogin[]>>;

  socialLogin: (
    data: SocialLoginRequest,
  ) => Promise<AxiosResponse<socialLoginResponse>>;
}
