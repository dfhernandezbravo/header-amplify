import { TopBrandsStruct } from '@entities/topBrands/top-brands-entity';
import { useMemo } from 'react';
import { HeaderLink, HeaderTop, HeaderTopItem } from './styles';
import Tooltip from './toolTip';
import { topBrands } from './brands';

const handleRedirect = (link: string) => {
  if (typeof window !== 'undefined') window.open(link);
};

const HeaderTopBrands = () => {
  return useMemo(
    () => (
      <HeaderTop>
        {topBrands.map((brand: TopBrandsStruct) => (
          <HeaderTopItem key={brand.name}>
            <HeaderLink
              title={brand.name}
              image={brand.image}
              hasTooltip={brand.toolTip}
              onClick={() => !brand.toolTip && handleRedirect(brand.link)}
            >
              {!brand.image && brand.name}
              {brand.toolTip && brand?.items?.length > 0 && (
                <Tooltip items={brand?.items} />
              )}
            </HeaderLink>
          </HeaderTopItem>
        ))}
      </HeaderTop>
    ),
    [],
  );
};

export default HeaderTopBrands;
