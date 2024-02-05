import { LoginStep } from '@entities/login/login.entity';
import LoginMethods from './methods';
import LoginUserEmail from './user-email';
import LoginUserEmailCode from './user-email-code';
import LoginUserPassword from './user-password';
import LoginSetPassword from './user-set-password';
import CreateAccountEmail from './create-account/create-account-email';
import CreateAccountUserPassword from './create-account/create-account-password';
import SendUserCode from './create-account/send-user-code';

export const loginSteps: LoginStep = {
  Email: <LoginUserEmail nextStep="EmailCode" />,
  Methods: <LoginMethods />,
  UserPassword: <LoginUserPassword />,
  SetPassword: <LoginSetPassword />,
  EmailCode: <LoginUserEmailCode />,
  EmailSetPassword: <LoginUserEmail nextStep="SetPassword" />,
  createAccountEmail: <CreateAccountEmail />,
  creadAccountUserPassword: <CreateAccountUserPassword />,
  sendUserCode: <SendUserCode />,
};
