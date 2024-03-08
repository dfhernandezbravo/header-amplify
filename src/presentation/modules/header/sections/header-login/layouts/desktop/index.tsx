import { useState } from 'react';
import Image from 'next/image';
import Desktop from '@components/layout/desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { closeCategories } from '@store/category/slices/category-slice';
import { openModalLogin } from '@store/login/slices/login-slice';
import LoginButton from '../../components/login-button';
import LoginMenu from '../../components/login-menu';
import { LoginContainerDesktop, LoginInformation } from '../../styles';

const HeaderLoginDesktop = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(closeCategories());
    dispatch(openModalLogin());
  };

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
          />
        )}
      </LoginContainerDesktop>
    </Desktop>
  );
};

export default HeaderLoginDesktop;
