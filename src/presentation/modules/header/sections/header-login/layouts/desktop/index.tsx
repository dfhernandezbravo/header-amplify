import { useEffect, useState } from 'react';
import Image from 'next/image';
import Desktop from '@components/layout/desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';
import { openModalLogin } from '@store/login/slices/login-slice';
import LoginButton from '../../components/login-button';
import LoginMenu from '../../components/login-menu';
import { LoginContainerDesktop, LoginInformation } from '../../styles';
import { useQuery } from 'react-query';
import { getAccountLinks } from '@use-cases/customer/get-account-links';

const HeaderLoginDesktop = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { data: links, refetch } = useQuery(
    ['get-account-links'],
    getAccountLinks,
    { enabled: false },
  );

  const handleLogin = () => {
    if (isLogged) return;
    dispatch(closeCategories());
    dispatch(openModalLogin());
  };

  useEffect(() => {
    if (customer) refetch();
  }, [customer]);

  return (
    <Desktop>
      <LoginContainerDesktop
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <LoginInformation onClick={() => handleLogin()}>
          <Image
            src="/icons/header/user-circle.svg"
            width={25}
            height={25}
            alt="User Icon"
          />
          <LoginButton />
        </LoginInformation>
        {isMenuOpen && (
          <LoginMenu
            isMenuOpen={isMenuOpen}
            customer={customer}
            handleLogin={() => handleLogin()}
            menuOptions={links}
          />
        )}
      </LoginContainerDesktop>
    </Desktop>
  );
};

export default HeaderLoginDesktop;
