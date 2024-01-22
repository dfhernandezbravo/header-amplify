import ButtonLinkLogin from '../../components/button-link-login';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import {
  ButtonNewAccount,
  InnerContainer,
  LinkNewAccount,
  LinkNewAccountText,
  LoginEmailContainer,
  MethodsContainer,
  NewAccountContainer,
  SocialLoginContainer,
} from './styles';
import ButtonSocialLogin from '../../components/button-social-login';
import LoginUserPassword from '../user-password';
import { navigateTo } from '@store/login/slices/login-slice';
import Image from 'next/image';

const LoginMethods = () => {
  const { socialMethods } = useAppSelector((state) => state.login);

  const dispatch = useAppDispatch();
  return (
    <MethodsContainer>
      <InnerContainer>
        <LoginUserPassword />
        <SocialLoginContainer>
          <LoginEmailContainer>
            <ButtonLinkLogin
              icon={
                <Image
                  src="/icons/header/login-key.svg"
                  width={24}
                  height={24}
                  alt="login-key"
                />
              }
              nextStep="Email"
              color="default"
            />
          </LoginEmailContainer>
          {socialMethods.map((method) => (
            <ButtonSocialLogin method={method} key={method.providerName} />
          ))}
          <NewAccountContainer>
            <ButtonNewAccount
              onClick={() => dispatch(navigateTo('EmailSetPassword'))}
            >
              <LinkNewAccountText>¿No tienes cuenta?</LinkNewAccountText>
              <LinkNewAccount>Crear cuenta </LinkNewAccount>
            </ButtonNewAccount>
          </NewAccountContainer>
        </SocialLoginContainer>
      </InnerContainer>
    </MethodsContainer>
  );
};

export default LoginMethods;
