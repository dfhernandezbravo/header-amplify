import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
import Image from 'next/image';
import { useState } from 'react';
import LoginButton from '../../components/login-button';
import LoginMenu from '../../components/login-menu';
import { LoginContainerDesktop, LoginInformation } from '../../styles';

const HeaderLoginDesktop = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Desktop>
      <LoginContainerDesktop
        onMouseOver={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <LoginInformation>
          <Image
            src="https://easycl.vtexassets.com/arquivos/new-desktop-user-icon.svg"
            width={25}
            height={25}
            alt="User Icon"
          />
          <LoginButton customer={customer} />
        </LoginInformation>
        {isMenuOpen && (
          <LoginMenu isMenuOpen={isMenuOpen} customer={customer} />
        )}
      </LoginContainerDesktop>
    </Desktop>
  );
};

export default HeaderLoginDesktop;
