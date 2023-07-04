import Modal from '@components/atoms/modal';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeModalLogin } from '@store/login/slices/login-slice';
import React from 'react';
import { loginSteps } from './steps';
import ModalHeader from './components/header';
import { ModalContent } from './styles';

const HeaderModalLogin = () => {
  const { isOpenModalLogin, loginStep } = useAppSelector(
    (state) => state.login,
  );
  const dispatch = useAppDispatch();

  return (
    <Modal
      isOpen={isOpenModalLogin}
      onClose={() => dispatch(closeModalLogin())}
    >
      <ModalHeader />
      {loginSteps[loginStep]}
    </Modal>
  );
};

export default HeaderModalLogin;
