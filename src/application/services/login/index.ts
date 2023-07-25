import { bffWebInstance } from '@data-sources/bbf-web-instance';
import LoginService from '@interfaces/login-service.interface';

const loginService: LoginService = {
  login: (data) => bffWebInstance.post('/auth/login', data),

  generateAccessKey: (data) => bffWebInstance.post('/auth/mail/token', data),

  validateAccessKey: (data) =>
    bffWebInstance.post('/auth/mail/token/validate', data),

  setPassword: (data) =>
    bffWebInstance.post('/auth/password/setpassword', data),

  generateToken: (data) =>
    bffWebInstance.get('/auth/jwt', {
      headers: { checkoutAuth: data.checkoutAuth },
    }),

  getLoginMethods: () => bffWebInstance.get('/auth/loginMethods'),
};

export default loginService;
