import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { HeaderBottom } from './style';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderFooter = () => {
  const { sendEventAnalytics } = useAnalytics();
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;

  return (
    <HeaderBottom>
      <div>
        <Link
          href="/stores"
          onClick={() =>
            sendEventAnalytics({
              event: 'interaccion',
              category: 'Interacciones Header',
              action: 'Click horarios y tiendas',
              tag: isLogged ? 'Usuario Logeado' : 'Usuario Guest',
            })
          }
        >
          Horarios y tiendas
        </Link>
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
