import { bffWebInstance } from '@data-sources/bbf-web-instance';
import LoginService from '@interfaces/login-service.interface';

const loginService: LoginService = {
  login: (data) => bffWebInstance.post('/auth/login', data),

  generateAccessKey: (data) => bffWebInstance.post('/auth/accessKey', data),

  validateAccessKey: (data) =>
    bffWebInstance.post('/auth/accessKey/validation', data),

  setPassword: (data) => bffWebInstance.post('/auth/password', data),

  generateToken: (data) =>
    bffWebInstance.get('/auth/jwt', {
      headers: { checkoutAuth: data.checkoutAuth },
    }),

  getLoginMethods: () => bffWebInstance.get('/auth/socialLogin/providers'),

  socialLogin: (data) =>
    bffWebInstance.post('auth/socialLogin/urlAuthProvider', data),
};

export default loginService;
