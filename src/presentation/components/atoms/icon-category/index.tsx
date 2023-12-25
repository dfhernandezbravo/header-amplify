import React from 'react';
import Image from 'next/image';

interface Props {
  icon: string;
}

const CategoryIcon = ({ icon }: Props) => {
  const size = 20;

  return <Image src={icon} width={size} height={size} alt="" priority />;
};

export default CategoryIcon;
