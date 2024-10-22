import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import useShowModules from '@modules/header/hooks/use-show-module';
import HeaderCart from '@modules/header/sections/header-cart';
import {
  MenuCategories,
  ModalCategories,
} from '@modules/header/sections/header-categories';
import HeaderInformation from '@modules/header/sections/header-information';
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
  SecondRow,
} from './styles';

interface Props {
  modules: Modules;
}

const HeaderDesktop = ({ modules }: Props) => {
  const { orderFormId, customer, isUserLogged } = useRegionalizer();
  const { isOpenResults } = useAppSelector((state) => state.search);
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const { showModule } = useShowModules();

  const hasSecondRow = modules.categories || modules.footerHeader;

  return (
    <Desktop>
      {showModule(modules.topBrands, <HeaderTopBrands />)}
      <HeaderDesktopContainer>
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
              orderFormId={orderFormId}
              customer={customer}
              isUserLogged={isUserLogged}
            />,
          )}
          {showModule(modules.login, <HeaderLogin />)}
          {showModule(modules.cart, <HeaderCart />)}
        </FirstRow>
        {hasSecondRow && (
          <SecondRow>
            {showModule(modules.categories, <MenuCategories />)}
            {showModule(modules.footerHeader, <HeaderInformation />)}
          </SecondRow>
        )}
      </HeaderDesktopContainer>
      <HeaderModalLogin />
      {isOpenCategories && <ModalCategories />}
    </Desktop>
  );
};

export default HeaderDesktop;
