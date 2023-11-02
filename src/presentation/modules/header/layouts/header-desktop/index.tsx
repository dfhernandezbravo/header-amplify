import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import useShowModules from '@modules/header/hooks/use-show-module';
import HeaderCart from '@modules/header/sections/header-cart';
import {
  MenuCategories,
  ModalCategories,
} from '@modules/header/sections/header-categories';
import HeaderFooter from '@modules/header/sections/header-footer';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import HeaderResults from '@modules/header/sections/header-results';
import HeaderSearch from '@modules/header/sections/header-search';
import HeaderTopBrands from '@modules/header/sections/header-top-brands';
import { Modules } from '@modules/header/types';
import {
  Container,
  HeaderDesktopContainer,
  HeaderDesktopSearchSection,
} from './styles';

interface Props {
  modules: Modules;
}

const HeaderDesktop = ({ modules }: Props) => {
  const { orderFormId, customer, isUserLogged } = useRegionalizer();
  const { isOpenResults } = useAppSelector((state) => state.search);
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const { showModule } = useShowModules();

  return (
    <Desktop>
      {showModule(modules.topBrands, <HeaderTopBrands />)}

      <HeaderDesktopContainer>
        {showModule(modules.logo, <HeaderLogo />)}
        {showModule(modules.categories, <MenuCategories />)}
        {showModule(
          modules.location,
          <HeaderLocation
            addressSelected={null}
            orderFormId={orderFormId}
            customer={customer}
            isUserLogged={isUserLogged}
          />,
        )}
        {showModule(
          modules.search,
          <HeaderDesktopSearchSection>
            <HeaderSearch />
            {isOpenResults && <HeaderResults />}
          </HeaderDesktopSearchSection>,
        )}

        <Container>
          {showModule(modules.login, <HeaderLogin />)}
          {showModule(modules.cart, <HeaderCart />)}
        </Container>
      </HeaderDesktopContainer>

      {showModule(modules.footerHeader, <HeaderFooter />)}
      <HeaderModalLogin />
      {isOpenCategories && <ModalCategories />}
    </Desktop>
  );
};

export default HeaderDesktop;
