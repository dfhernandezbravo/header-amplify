import { HeaderBottom } from '@modules/header/styles/header.styles';
import Image from 'next/image';
import React from 'react';

const HeaderFooter = () => {
  return (
    <HeaderBottom>
      <div>
        <a href="/tiendas">Horarios y tiendas</a>
      </div>
      <div>
        <span>
          Todo <strong>Easy.cl</strong> hasta en{' '}
          <strong>6 cuotas sin interés</strong>
        </span>
        <Image
          src="https://easycl.vteximg.com.br/arquivos/medios-pago2.svg"
          width="113"
          height="21"
          alt=""
        />
      </div>
    </HeaderBottom>
  );
};

export default HeaderFooter;
