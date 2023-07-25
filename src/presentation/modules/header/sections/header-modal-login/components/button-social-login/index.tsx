import React, { ReactNode } from 'react';
import { ButtonSocialLoginContainer } from './styles';
import { SocialLogin, SocialProviders } from '@entities/login/login.entity';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';

const sizeIcon = 24;

export type ColorSocialLogin = 'default' | 'blue';

interface Props {
  method: SocialLogin;
}

type ButtonVariants = {
  [key in SocialProviders]: {
    color: ColorSocialLogin;
    title: string;
    icon: ReactNode;
  };
};

const buttonsVariants: ButtonVariants = {
  Google: {
    color: 'default',
    title: 'Ingresa con Google',
    icon: <FcGoogle size={sizeIcon} />,
  },
  Facebook: {
    color: 'blue',
    title: 'Ingresa con Facebook',
    icon: <MdFacebook size={sizeIcon} />,
  },
};

const ButtonSocialLogin: React.FC<Props> = ({ method }) => {
  const variant = buttonsVariants[method.providerName];
  return (
    <ButtonSocialLoginContainer color={variant.color} href={method.url}>
      {variant.icon} {variant.title}
    </ButtonSocialLoginContainer>
  );
};

export default ButtonSocialLogin;
