import Image from 'next/image';
import ButtonSocialLogin from '../../components/button-social-login';
import ButtonLinkLogin from '../button-link-login';
import { navigateTo } from '@store/login/slices/login-slice';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import {
  ButtonNewAccount,
  LinkNewAccount,
  LinkNewAccountText,
  LoginEmailContainer,
  NewAccountContainer,
} from './styles';

const SocialAccessKeyLogin = () => {
  const { socialMethods } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  return (
    <>
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
          onClick={() => dispatch(navigateTo('createAccountEmail'))}
        >
          <LinkNewAccountText>¿No tienes cuenta?</LinkNewAccountText>
          <LinkNewAccount>Crear cuenta </LinkNewAccount>
        </ButtonNewAccount>
      </NewAccountContainer>
    </>
  );
};

export default SocialAccessKeyLogin;
