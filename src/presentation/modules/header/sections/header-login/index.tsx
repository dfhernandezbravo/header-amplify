import { UserLogin } from '@modules/header/styles/header.styles';
import React from 'react';
import Image from 'next/image';
import Mobile from '@components/layout/mobile';
import Desktop from '@components/layout/desktop';

const HeaderLogin = () => {
  return (
    <>
      <Mobile>
        <p>Inicia Sesión</p>
      </Mobile>
      <Desktop>
        <UserLogin>
          <Image
            src="https://easycl.vtexassets.com/arquivos/new-desktop-user-icon.svg"
            width={25}
            height={25}
            alt="User Icon"
          />
          <div>
            <p>¡Hola!</p>
            <p>Inicia sesión</p>
          </div>
        </UserLogin>
      </Desktop>
    </>
  );
};

export default HeaderLogin;
