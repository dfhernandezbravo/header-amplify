import Modal from '@components/atoms/modal';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeModalLogin } from '@store/login/slices/login-slice';
import getLoginMethods from '@use-cases/login/get-login-methods';
import React, { useEffect } from 'react';
import ModalHeader from './components/header';
import { loginSteps } from './steps';
import { Container, SocialLoginContainer } from './styles';
import SocialAccessKeyLogin from './components/social-accesskey-login';
import CreateAccounContextState from './steps/context/create-account-state';

const HeaderModalLogin = () => {
  const { isOpenModalLogin, loginStep } = useAppSelector(
    (state) => state.login,
  );

  const dismissSteps = [
    'EmailCode',
    'createAccountEmail',
    'creadAccountUserPassword',
    'sendUserCode',
  ];
  const showSocialLogin = !dismissSteps.includes(loginStep);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoginMethods());
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpenModalLogin}
      onClose={() => dispatch(closeModalLogin())}
    >
      <CreateAccounContextState>
        <ModalHeader />
        <Container>
          <div>{loginSteps[loginStep]}</div>
          {showSocialLogin && (
            <SocialLoginContainer>
              <SocialAccessKeyLogin />
            </SocialLoginContainer>
          )}
        </Container>
      </CreateAccounContextState>
    </Modal>
  );
};

export default HeaderModalLogin;
