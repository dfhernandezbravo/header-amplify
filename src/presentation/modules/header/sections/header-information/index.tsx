import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useAnalytics from '@hooks/useAnalytics';
import { useAppSelector } from '@hooks/storeHooks';
import { Container, InstallmentContainer } from './styles';

const HeaderInformation = () => {
  const { sendEventAnalytics } = useAnalytics();
  const { isLogged } = useAppSelector((state) => state.login);

  const handleLinkOnClick = () => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Interacciones Header',
      action: 'Click horarios y tiendas',
      tag: isLogged ? 'Usuario Logeado' : 'Usuario Guest',
    });
  };

  return (
    <Container>
      <InstallmentContainer>
        <p className="text">Todo Easy.cl hasta en 6 cuotas sin interés</p>
        <Image
          src="/icons/header/bank-cards.svg"
          width={20}
          height={20}
          alt="bank-cards"
        />
      </InstallmentContainer>
      <Link
        className="stores-link"
        href="https://www.easy.cl/tiendas"
        onClick={() => handleLinkOnClick()}
      >
        Horarios y tiendas
      </Link>
    </Container>
  );
};

export default HeaderInformation;
