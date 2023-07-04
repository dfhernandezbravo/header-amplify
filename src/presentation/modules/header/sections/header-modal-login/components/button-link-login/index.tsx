import { LoginStep } from '@entities/login/login.entity';
import React from 'react';
import { ButtonLinkContainer } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';

export type ColorButtonLinkLogin = 'default' | 'green';

interface Props {
  icon: React.ReactNode;
  title: string;
  color?: ColorButtonLinkLogin;
  nextStep: keyof LoginStep;
}

const ButtonLinkLogin: React.FC<Props> = ({
  icon,
  title,
  color = 'default',
  nextStep,
}) => {
  const dispacth = useAppDispatch();
  return (
    <ButtonLinkContainer
      color={color}
      onClick={() => dispacth(navigateTo(nextStep))}
    >
      {icon}
      {title}
    </ButtonLinkContainer>
  );
};

export default ButtonLinkLogin;
