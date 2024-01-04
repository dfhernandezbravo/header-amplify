import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OffertContainer } from './styles';

const OffertLink = () => {
  return (
    <OffertContainer>
      <Image
        src="/icons/header/ofert-icon.svg"
        width={24}
        height={24}
        alt="ofert-icon"
      />
      <Link href="/" className="text">
        Ofertas
      </Link>
    </OffertContainer>
  );
};

export default OffertLink;
