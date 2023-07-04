import {
  GenerateAccessKeyRequest,
  GenerateTokenRequest,
  LoginRequest,
  SetPasswordRequest,
  ValidateAccessKeyRequest,
} from '@entities/login/login.request';
import {
  GenerateTokenResponse,
  LoginResponse,
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
}
