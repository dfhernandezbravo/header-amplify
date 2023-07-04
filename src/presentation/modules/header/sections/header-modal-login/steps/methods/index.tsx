import { LoginProviders } from '@entities/login/login.entity';
import React from 'react';
import ButtonLinkLogin from '../../components/button-link-login';
import { MdVpnKey, MdOutlineEmail, MdFacebook } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useAppSelector } from '@hooks/storeHooks';
import { MethodsContainer } from './styles';

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
  Google: (
    <ButtonLinkLogin
      icon={<FcGoogle size={sizeIcon} />}
      title="Ingresa con Google"
      nextStep="UserPassword"
    />
  ),
  Facebook: (
    <ButtonLinkLogin
      icon={<MdFacebook size={sizeIcon} />}
      title="Ingresa con Facebook"
      nextStep="UserPassword"
    />
  ),
};

const LoginMethods = () => {
  const { loginMethods } = useAppSelector((state) => state.login);
  return (
    <MethodsContainer>
      {loginMethods.map((method) => (
        <div key={method.provider}>{ButtonsLink[method.provider]}</div>
      ))}
    </MethodsContainer>
  );
};

export default LoginMethods;
