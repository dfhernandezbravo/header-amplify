import React from 'react';
import Link from 'next/link';
import { HeaderCencosudCardModal } from './styles';
import { TopBrandsItems } from '@entities/topBrands/top-brands-entity';

const HeaderCencosuTooltip = ({ items }: { items: TopBrandsItems[] }) => {
  return (
    <HeaderCencosudCardModal>
      <ul>
        {items?.length > 0 &&
          items?.map((item: TopBrandsItems, index: number) => (
            <li className={item.icon} key={index}>
              <Link href={item.link} target="_blank">
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
      </ul>
    </HeaderCencosudCardModal>
  );
};

export default HeaderCencosuTooltip;
