import React, { useCallback, useEffect } from 'react';
import HeaderMobile from './layouts/header-mobile';
import HeaderDesktop from './layouts/header-desktop';
import { useAppSelector } from '@hooks/storeHooks';
import { useCookies } from 'react-cookie';
import { HeaderContainerWrapper } from './styles';

const HeaderContainer = () => {
  const { authCookies } = useAppSelector((state) => state.login);
  const [_cookies, setCookie] = useCookies();

  const addCookies = useCallback(() => {
    authCookies.forEach((cookie) => {
      setCookie(cookie.name, cookie.value, { maxAge: cookie.expires });
    });
  }, [authCookies, setCookie]);

  useEffect(() => {
    addCookies();
  }, [authCookies, addCookies]);

  return (
    <HeaderContainerWrapper>
      <HeaderMobile />
      <HeaderDesktop />
    </HeaderContainerWrapper>
  );
};

export default HeaderContainer;
