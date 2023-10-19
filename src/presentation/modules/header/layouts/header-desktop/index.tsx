import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderCategory from '@modules/header/sections/header-category';
import HeaderFooter from '@modules/header/sections/header-footer';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import HeaderResults from '@modules/header/sections/header-results';
import HeaderSearch from '@modules/header/sections/header-search';
import HeaderTopBrands from '@modules/header/sections/header-top-brands';
import {
  Container,
  Divider,
  HeaderDesktopContainer,
  HeaderDesktopSearchSection,
} from './styles';

const HeaderDesktop = () => {
  const { orderFormId, customer, isUserLogged } = useRegionalizer();
  const { isOpenResults } = useAppSelector((state) => state.search);

  return (
    <Desktop>
      <HeaderTopBrands />
      <HeaderDesktopContainer>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderLocation
          addressSelected={null}
          orderFormId={orderFormId}
          customer={customer}
          isUserLogged={isUserLogged}
        />
        <HeaderDesktopSearchSection>
          <HeaderSearch />
          {isOpenResults && <HeaderResults />}
        </HeaderDesktopSearchSection>
        <Container>
          <HeaderLogin />
          <Divider />
          <HeaderCart />
        </Container>
      </HeaderDesktopContainer>
      <HeaderModalLogin />
      <HeaderCategory />
      <HeaderFooter isCartPath={false} />
    </Desktop>
  );
};

export default HeaderDesktop;
