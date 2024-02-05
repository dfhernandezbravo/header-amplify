import { LoginStep } from '@entities/login/login.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { ModalHeaderContainer, ModalIconButton } from './style';
import { AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';
import { closeModalLogin, navigateTo } from '@store/login/slices/login-slice';

const backSteps: Record<keyof LoginStep, keyof LoginStep | null> = {
  Methods: null,
  Email: 'Methods',
  EmailCode: 'Email',
  UserPassword: 'Methods',
  EmailSetPassword: 'UserPassword',
  SetPassword: 'EmailSetPassword',
  createAccountEmail: 'createAccountEmail',
  creadAccountUserPassword: 'creadAccountUserPassword',
  sendUserCode: 'sendUserCode',
};

const ModalHeader = () => {
  const { loginStep } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const backStep = backSteps[loginStep];

  return (
    <ModalHeaderContainer>
      {backStep ? (
        <ModalIconButton onClick={() => dispatch(navigateTo(backStep))}>
          <AiOutlineArrowLeft size={20} color="#485760" />
          <span className="back-button">Volver</span>
        </ModalIconButton>
      ) : (
        <p className="title">Ingresa a tu cuenta de Easy.cl</p>
      )}
      <ModalIconButton onClick={() => dispatch(closeModalLogin())}>
        <AiOutlineClose size={20} />
      </ModalIconButton>
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
