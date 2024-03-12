import { LoginStep } from '@entities/login/login.entity';
import React from 'react';
import { ButtonLinkContainer } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';

export type ColorButtonLinkLogin = 'default' | 'green';

interface Props {
  icon: React.ReactNode;
  color?: ColorButtonLinkLogin;
  nextStep: keyof LoginStep;
}

const ButtonLinkLogin: React.FC<Props> = ({
  icon,
  color = 'default',
  nextStep,
}) => {
  const dispacth = useAppDispatch();
  return (
    <ButtonLinkContainer
      href={''}
      color={color}
      onClick={(e) => {
        e.preventDefault();
        dispacth(navigateTo(nextStep));
      }}
    >
      {icon}
      <p>
        Ingresar con <span className="bold-text">código de acceso</span>
      </p>
    </ButtonLinkContainer>
  );
};

export default ButtonLinkLogin;
