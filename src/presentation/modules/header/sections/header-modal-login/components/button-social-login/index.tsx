import React, { ReactNode } from 'react';
import { ButtonSocialLoginContainer } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import socialLogin from '@use-cases/login/social-login-google';
import { SocialLogin, SocialProviders } from '@entities/login/login.entity';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { closeModalLogin } from '@store/login/slices/login-slice';
import { useResponsiveSize } from '../../hooks/use-windows-size';

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
  const dispatch = useAppDispatch();
  const variant = buttonsVariants[method.providerName];
  const windowSize = useResponsiveSize();

  const handleSocialLogin = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const callback = window.location.href;
    const providerName = method.providerName;
    const response = await dispatch(socialLogin({ providerName, callback }));
    dispatch(closeModalLogin());

    window.open(response?.payload as string, '_blank', windowSize);
  };

  return (
    <ButtonSocialLoginContainer
      color={variant.color}
      href={''}
      onClick={(event) => handleSocialLogin(event)}
    >
      {variant.icon} {variant.title}
    </ButtonSocialLoginContainer>
  );
};

export default ButtonSocialLogin;
