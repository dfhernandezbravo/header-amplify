import { MenuLocation } from '@modules/header/styles/header.styles';
import React from 'react';
import Image from 'next/image';

const HeaderLocation = () => {
  return (
    <MenuLocation>
      <Image
        src="https://easycl.vtexassets.com/arquivos/white-location-icon.svg"
        width={19}
        height={25}
        alt="Location Icon"
      />
      <div>
        <p>¿Dónde entregar tu compra?</p>
        <p>Ingresa tu ubicación</p>
      </div>
    </MenuLocation>
  );
};

export default HeaderLocation;
