import React from 'react';
import { iconsCategory } from '@env/icons-category';
import Image from 'next/image';

interface Props {
  subname: string;
}

const CategoryIcon = ({ subname }: Props) => {
  const icon = iconsCategory[subname];

  const size = 20;

  return (
    <Image
      src={`/icons/categories/${icon}.svg`}
      width={size}
      height={size}
      alt=""
      priority
    />
  );
};

export default CategoryIcon;
