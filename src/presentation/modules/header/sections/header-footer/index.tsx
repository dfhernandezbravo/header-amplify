import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
// import { HeaderBottom } from '@modules/header/styles/header.styles'; 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  isCartPath:boolean
}

const HeaderFooter = ({isCartPath}: Props) => {
  const { sendEventAnalytics } = useAnalytics();
  const { isLogged } = useAppSelector((state) => state.login);

  // const isCarth = isCartPath ? isCartPath : false

  return (
    <div>
      <div>
        <Link
          href="https://www.easy.cl/tiendas"
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
    </div>
  );
};

export default HeaderFooter;
