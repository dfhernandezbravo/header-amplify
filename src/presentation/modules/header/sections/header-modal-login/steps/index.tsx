import { LoginStep } from '@entities/login/login.entity';
import LoginMethods from './methods';
import LoginUserEmail from './user-email';
import LoginUserEmailCode from './user-email-code';
import LoginUserPassword from './user-password';
import LoginSetPassword from './user-set-password';

export const loginSteps: LoginStep = {
  Email: <LoginUserEmail nextStep="EmailCode" />,
  Methods: <LoginMethods />,
  UserPassword: <LoginUserPassword />,
  SetPassword: <LoginSetPassword />,
  EmailCode: <LoginUserEmailCode />,
  EmailSetPassword: <LoginUserEmail nextStep="SetPassword" />,
};
