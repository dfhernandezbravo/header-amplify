import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useRegionalizer from '@hooks/useRegionalizer';
import useShowModules from '@modules/header/hooks/use-show-module';
import HeaderCart from '@modules/header/sections/header-cart';
import {
  MenuCategories,
  ModalCategories,
} from '@modules/header/sections/header-categories';
import HeaderLocation from '@modules/header/sections/header-location';
import HeaderLogo from '@modules/header/sections/header-logo';
import HeaderModalLogin from '@modules/header/sections/header-modal-login';
import HeaderSearchMobile from '@modules/header/sections/header-search-mobile';
import { Modules } from '@modules/header/types';
import { openResults } from '@store/search/slices/search-slice';
import {
  FirsRowMobile,
  HeaderMobileContainer,
  HeaderMobileSearchSection,
  SearchInputContainer,
  SecondRowMobile,
} from './styles';
import Image from 'next/image';

interface Props {
  modules: Modules;
}

const HeaderMobile = ({ modules }: Props) => {
  const { isOpenResults } = useAppSelector((state) => state.search);
  const { isOpenCategories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { orderFormId, isUserLogged, customer } = useRegionalizer();
  const { showModule } = useShowModules();

  return (
    <Mobile>
      <HeaderMobileContainer>
        <FirsRowMobile>
          {showModule(modules.logo, <HeaderLogo />)}
          {showModule(
            modules.search,
            <HeaderMobileSearchSection>
              <SearchInputContainer
                onClick={() => dispatch(openResults())}
                placeholder="Buscar..."
              />
              <Image
                className="search-icon"
                src="/icons/header/search-icon.svg"
                width={24}
                height={24}
                alt="search-icon"
              />
            </HeaderMobileSearchSection>,
          )}
          {showModule(modules.cart, <HeaderCart />)}
        </FirsRowMobile>

        <SecondRowMobile>
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
        </SecondRowMobile>
        {isOpenCategories && <ModalCategories />}
      </HeaderMobileContainer>
      {isOpenResults && <HeaderSearchMobile />}
      <HeaderModalLogin />
    </Mobile>
  );
};

export default HeaderMobile;
