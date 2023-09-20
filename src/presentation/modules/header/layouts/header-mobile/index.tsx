import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import HeaderCart from '@modules/header/sections/header-cart';
import HeaderCategory from '@modules/header/sections/header-category';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogin from '@modules/header/sections/header-login';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderMenu from '@modules/header/sections/header-menu';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import HeaderSearchMobile from '@modules/header/sections/header-search-mobile';
import { openResults } from '@store/search/slices/search-slice';
import {
  HeaderMobileContainer,
  HeaderMobileLocationSection,
  HeaderMobileOptionSection,
  HeaderMobileOptionSectionElement,
  HeaderMobileSearchSection,
  SearchInputContainer,
} from './styles';

const HeaderMobile = () => {
  const { isOpenResults } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { orderFormId, isUserLogged, customer } = useRegionalizer();

  const { pathname } = useRouter()
  const isCartPath = pathname.includes('cart')

  return (
    <Mobile>
      <HeaderMobileContainer>
        <HeaderMobileOptionSection isCartPath={isCartPath}>
          <HeaderMobileOptionSectionElement>
            <HeaderMenu isCartPath={isCartPath}/>
            <HeaderLogo />
          </HeaderMobileOptionSectionElement>

          <HeaderMobileOptionSectionElement isCartPath={isCartPath}>
            <HeaderLogin />
            <HeaderCart />
          </HeaderMobileOptionSectionElement>
        </HeaderMobileOptionSection>
        <HeaderCategory />

        <HeaderMobileSearchSection isCartPath={isCartPath}>
          <SearchInputContainer
            onClick={() => dispatch(openResults())}
            placeholder="¡Hola! ¿Qué estás buscando?"
          />
        </HeaderMobileSearchSection>

        {isOpenResults && <HeaderSearchMobile />}

        <HeaderMobileLocationSection>
          <HeaderLocation
            addressSelected={null}
            orderFormId={orderFormId}
            customer={customer}
            isUserLogged={isUserLogged}
          />
        </HeaderMobileLocationSection>
      </HeaderMobileContainer>
      <HeaderModalLogin />
    </Mobile>
  );
};

export default HeaderMobile;
