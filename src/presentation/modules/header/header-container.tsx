import { useAppDispatch } from '@hooks/storeHooks';
import { closeResults } from '@store/search/slices/search-slice';
import { useEffect, useMemo } from 'react';
import useScroll from './hooks/use-scroll';
import HeaderDesktop from './layouts/header-desktop';
import HeaderMobile from './layouts/header-mobile';
import CookiesProvider from './providers/cookies';
import WindowsEventProvider from './providers/windows-event';
import { HeaderContainerWrapper } from './styles';
import { HeaderProps } from './types';

const HeaderContainer = ({ modules }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { visible } = useScroll();

  useEffect(() => {
    if (!visible) {
      dispatch(closeResults());
    }
  }, [visible, dispatch]);

  const renderBody = useMemo(
    () => (
      <HeaderContainerWrapper visible={visible}>
        <HeaderMobile modules={modules} />
        <HeaderDesktop modules={modules} />
      </HeaderContainerWrapper>
    ),
    [visible],
  );

  return (
    <WindowsEventProvider>
      <CookiesProvider>{renderBody}</CookiesProvider>
    </WindowsEventProvider>
  );
};

export default HeaderContainer;
