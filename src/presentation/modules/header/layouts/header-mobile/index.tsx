import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import useShowModules from '@modules/header/hooks/use-show-module';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderCategory from '@modules/header/sections/header-categories/components/modal-categories';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-categories/components/menu-icon';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import HeaderSearchMobile from '@modules/header/sections/header-search-mobile';
import { Modules } from '@modules/header/types';
import { openResults } from '@store/search/slices/search-slice';
import {
  HeaderMobileContainer,
  HeaderMobileLocationSection,
  HeaderMobileOptionSection,
  HeaderMobileOptionSectionElement,
  HeaderMobileSearchSection,
  SearchInputContainer,
} from './styles';

interface Props {
  modules: Modules;
}

const HeaderMobile = ({ modules }: Props) => {
  const { isOpenResults } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { orderFormId, isUserLogged, customer } = useRegionalizer();
  const { showModule } = useShowModules();

  return (
    <Mobile>
      <HeaderMobileContainer>
        <HeaderMobileOptionSection>
          <HeaderMobileOptionSectionElement>
            {showModule(modules.categories, <HeaderMenu />)}

            {showModule(modules.logo, <HeaderLogo />)}
          </HeaderMobileOptionSectionElement>

          <HeaderMobileOptionSectionElement>
            {showModule(modules.login, <HeaderLogin />)}
            {showModule(modules.cart, <HeaderCart />)}
          </HeaderMobileOptionSectionElement>
        </HeaderMobileOptionSection>
        <HeaderCategory />

        {showModule(
          modules.search,
          <HeaderMobileSearchSection>
            <SearchInputContainer
              onClick={() => dispatch(openResults())}
              placeholder="¡Hola! ¿Qué estás buscando?"
            />
          </HeaderMobileSearchSection>,
        )}

        {showModule(
          modules.location,
          <HeaderMobileLocationSection>
            <HeaderLocation
              addressSelected={null}
              orderFormId={orderFormId}
              customer={customer}
              isUserLogged={isUserLogged}
            />
          </HeaderMobileLocationSection>,
        )}
      </HeaderMobileContainer>
      {isOpenResults && <HeaderSearchMobile />}
      <HeaderModalLogin />
    </Mobile>
  );
};

export default HeaderMobile;
