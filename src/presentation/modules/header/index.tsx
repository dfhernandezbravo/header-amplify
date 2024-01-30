import ProvidersLayout from '@components/layout/providers';
import HeaderContainer from './header-container';
import { HeaderProps } from './types';

const Header = ({
  modules = {
    location: true,
    login: true,
    logo: true,
    categories: true,
    search: true,
    cart: true,
    topBrands: true,
    footerHeader: true,
  },
  ...rest
}: HeaderProps) => {
  return (
    <ProvidersLayout>
      <HeaderContainer {...rest} modules={modules} />
    </ProvidersLayout>
  );
};
export default Header;
