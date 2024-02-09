import Desktop from '@components/layout/desktop';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import getLoginMethods from '@use-cases/login/get-login-methods';
import React, { useEffect } from 'react';
import Modal from '@components/atoms/modal';
import { closeModalLogin } from '@store/login/slices/login-slice';
import ModalHeader from '../../components/header';
import { loginSteps } from '../../steps';
import { Container, SocialLoginContainer } from '../../styles';
import SocialAccessKeyLogin from '../../components/social-accesskey-login';

const ModalLoginDesktop = () => {
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
    <Desktop>
      <Modal
        isOpen={isOpenModalLogin}
        onClose={() => dispatch(closeModalLogin())}
      >
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
    </Desktop>
  );
};

export default ModalLoginDesktop;
