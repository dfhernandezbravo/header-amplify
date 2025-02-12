import Mobile from '@components/layout/mobile';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import getLoginMethods from '@use-cases/login/get-login-methods';
import React, { useEffect } from 'react';
import { closeModalLogin } from '@store/login/slices/login-slice';
import ModalHeader from '../../components/header';
import { loginSteps } from '../../steps';
import { Container, SocialLoginContainer } from '../../styles';
import { BlockScroll } from './styles';
import SocialAccessKeyLogin from '../../components/social-accesskey-login';
import { BottomSheet } from '@ccom-eds-composer/composer';

const ModalLoginMobile = () => {
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
    <Mobile>
      <BlockScroll isOpen={isOpenModalLogin} />
      <BottomSheet
        open={isOpenModalLogin}
        onClose={() => dispatch(closeModalLogin())}
        height={585}
      >
        <ModalHeader />
        <Container>
          <>{loginSteps[loginStep]}</>
          {showSocialLogin && (
            <SocialLoginContainer>
              <SocialAccessKeyLogin />
            </SocialLoginContainer>
          )}
        </Container>
      </BottomSheet>
    </Mobile>
  );
};

export default ModalLoginMobile;
