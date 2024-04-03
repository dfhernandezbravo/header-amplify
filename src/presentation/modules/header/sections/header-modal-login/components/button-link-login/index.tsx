import { LoginStep } from '@entities/login/login.entity';
import React from 'react';
import { ButtonLinkContainer } from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';
import Image from 'next/image';

export type ColorButtonLinkLogin = 'default' | 'green';

interface ButtonProps {
  icon: string;
  text: string;
  nextStep: keyof LoginStep;
}

const ButtonLinkLogin = () => {
  const { loginStep } = useAppSelector((state) => state.login);

  const dispacth = useAppDispatch();

  const buttonInfo = (): ButtonProps | null => {
    switch (loginStep) {
      case 'Email':
        return {
          icon: '/icons/header/lock-line.svg',
          text: 'contraseña',
          nextStep: 'Methods',
        };
      case 'Methods':
        return {
          icon: '/icons/header/login-key.svg',
          text: 'código de acceso',
          nextStep: 'Email',
        };
      default:
        return null;
    }
  };

  const info = buttonInfo();
  if (!info) return null;
  const { icon, text, nextStep } = info;

  return (
    <ButtonLinkContainer
      href={''}
      color="default"
      onClick={(e) => {
        e.preventDefault();
        dispacth(navigateTo(nextStep));
      }}
    >
      <Image src={icon} width={24} height={24} alt="login-icon" />
      <p>
        Ingresar con <span className="bold-text">{text}</span>
      </p>
    </ButtonLinkContainer>
  );
};

export default ButtonLinkLogin;
