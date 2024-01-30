import Modal from '@components/atoms/modal';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setError } from '@store/error/slices/error-slice';
import { closeModalLogin } from '@store/login/slices/login-slice';
import getLoginMethods from '@use-cases/login/get-login-methods';
import React, { useEffect } from 'react';
import ModalHeader from './components/header';
import { loginSteps } from './steps';
import { Container, ErrorLoginMessage, SocialLoginContainer } from './styles';
import SocialAccessKeyLogin from './components/social-accesskey-login';

const HeaderModalLogin = () => {
  const { isOpenModalLogin, loginStep } = useAppSelector(
    (state) => state.login,
  );
  const { error } = useAppSelector((state) => state.error);
  const showSocialLogin = loginStep !== 'EmailCode';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoginMethods());
  }, [dispatch]);

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
      <Container>
        <div>{loginSteps[loginStep]}</div>
        {showSocialLogin && (
          <SocialLoginContainer>
            <SocialAccessKeyLogin />
          </SocialLoginContainer>
        )}
      </Container>
    </Modal>
  );
};

export default HeaderModalLogin;
