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
  FirstRow,
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

      <FirstRow>
        {showModule(modules.logo, <HeaderLogo />)}
        {showModule(
          modules.search,
          <HeaderDesktopSearchSection>
            <HeaderSearch />
            {isOpenResults && <HeaderResults />}
          </HeaderDesktopSearchSection>,
        )}
        {showModule(
          modules.location,
          <HeaderLocation
            addressSelected={null}
            orderFormId={orderFormId}
            customer={customer}
            isUserLogged={isUserLogged}
          />,
        )}
        {showModule(modules.login, <HeaderLogin />)}
        {showModule(modules.cart, <HeaderCart />)}
      </FirstRow>

      <HeaderDesktopContainer>
        {showModule(modules.categories, <MenuCategories />)}
      </HeaderDesktopContainer>

      {showModule(modules.footerHeader, <HeaderFooter />)}
      <HeaderModalLogin />
      {isOpenCategories && <ModalCategories />}
    </Desktop>
  );
};

export default HeaderDesktop;
