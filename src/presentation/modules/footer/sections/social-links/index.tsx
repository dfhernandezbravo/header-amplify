import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: FooterSocialLinks[];
}

const SocialLinksFooter = ({ data }: Props) => {
  return (
    <div>
      <h4>Siguenos</h4>
      {data.map((item) => (
        <Link href={item.link} key={item.title}>
          <Image src={item.icon} width={40} height={40} alt={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinksFooter;
