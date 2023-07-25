import { LoginProviders } from '@entities/login/login.entity';
import React from 'react';
import ButtonLinkLogin from '../../components/button-link-login';
import { MdVpnKey, MdOutlineEmail } from 'react-icons/md';
import { useAppSelector } from '@hooks/storeHooks';
import { MethodsContainer } from './styles';
import ButtonSocialLogin from '../../components/button-social-login';

const sizeIcon = 24;

const ButtonsLink: Record<LoginProviders, React.ReactNode> = {
  Email: (
    <ButtonLinkLogin
      icon={<MdVpnKey size={sizeIcon} />}
      title="Recibir la clave de acceso por correo"
      nextStep="Email"
      color="green"
    />
  ),
  UserPassword: (
    <ButtonLinkLogin
      icon={<MdOutlineEmail size={sizeIcon} />}
      title="Ingresa con correo y contraseña"
      nextStep="UserPassword"
    />
  ),
};

const LoginMethods = () => {
  const { loginMethods, socialMethods } = useAppSelector(
    (state) => state.login,
  );
  return (
    <MethodsContainer>
      <span>Selecciona una de las opciones para confirmar tu identidad</span>

      {loginMethods.map((method) => (
        <div key={method.provider}>{ButtonsLink[method.provider]}</div>
      ))}
      {socialMethods.map((method) => (
        <ButtonSocialLogin method={method} key={method.providerName} />
      ))}
    </MethodsContainer>
  );
};

export default LoginMethods;
