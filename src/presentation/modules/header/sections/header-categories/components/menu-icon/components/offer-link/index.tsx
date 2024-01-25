import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OfferContainer } from './styles';

const OfferLink = () => {
  return (
    <OfferContainer>
      <Image
        src="/icons/header/offer-icon.svg"
        width={24}
        height={24}
        alt="ofert-icon"
      />
      <Link href="/" className="text">
        Ofertas
      </Link>
    </OfferContainer>
  );
};

export default OfferLink;
