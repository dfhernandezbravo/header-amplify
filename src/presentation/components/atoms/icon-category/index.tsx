import React from 'react';
import { iconsCategory } from '@env/icons-category';
import Image from 'next/image';

interface Props {
  subname: string;
}

const CategoryIcon = ({ subname }: Props) => {
  const icon = iconsCategory[subname];
  const iconPath =
    require(`../../../assets/icons/categories/${icon}.svg`).default;

  const size = 20;

  return <Image src={iconPath} width={size} height={size} alt="" priority />;
};

export default CategoryIcon;
