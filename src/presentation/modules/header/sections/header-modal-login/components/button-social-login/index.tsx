import React, { ReactNode } from 'react';
import { ButtonSocialLoginContainer } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import socialLogin from '@use-cases/login/social-login-google';
import { SocialLogin, SocialProviders } from '@entities/login/login.entity';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { closeModalLogin } from '@store/login/slices/login-slice';
import { useResponsiveSize } from '../../hooks/use-windows-size';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const handleSocialLogin = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const callback = window.location.href;
    const providerName = method.providerName;
    const response = await dispatch(socialLogin({ providerName, callback }));
    dispatch(closeModalLogin());

    // esta funcion se quitara cuando backend resuelva su problema de agregar el simbolo ? en la url cuando ya tiene parametros.
    const normalizeUrl = (url: string) => {
      const parts = url.split('?');
      if (parts.length > 2) {
        return [parts[0], parts.slice(1).join('&')].join('?');
      } else {
        return url;
      }
    };

    const windowOpen = window.open(
      response?.payload as string,
      '_blank',
      windowSize,
    );
    if (windowOpen) {
      const originalUrl = windowOpen.location.href;

      const urlChangeDetector = setInterval(() => {
        if (windowOpen.closed) {
          clearInterval(urlChangeDetector);
        } else if (windowOpen.location.href !== originalUrl) {
          const normalizedUrl = normalizeUrl(windowOpen.location.href);
          const url = new URL(normalizedUrl);
          const params = new URLSearchParams(url.search);
          const authParams =
            params.get('authStatus') === 'success' && params.get('accessToken');
          if (authParams) {
            // se envian los params recibidos a la ventana principal para hacer el login y actualizacion del carro correspondiente
            const newRoute = new URL(normalizedUrl);
            router.push(newRoute.href);
            clearInterval(urlChangeDetector);
            windowOpen.close();
          }
        }
      }, 1000); // Check every second
    }
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
