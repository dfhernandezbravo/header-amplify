import Modal from '@components/atoms/modal';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeModalLogin } from '@store/login/slices/login-slice';
import React, { useEffect } from 'react';
import { loginSteps } from './steps';
import ModalHeader from './components/header';
import { ErrorLoginMessage } from './styles';
import { setError } from '@store/error/slices/error-slice';

const HeaderModalLogin = () => {
  const { isOpenModalLogin, loginStep } = useAppSelector(
    (state) => state.login,
  );
  const { error } = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 10000);
    }
  }, [error, dispatch]);

  return (
    <Modal
      isOpen={isOpenModalLogin}
      onClose={() => dispatch(closeModalLogin())}
    >
      {error && <ErrorLoginMessage>{error.message}</ErrorLoginMessage>}
      <ModalHeader />
      {loginSteps[loginStep]}
    </Modal>
  );
};

export default HeaderModalLogin;
