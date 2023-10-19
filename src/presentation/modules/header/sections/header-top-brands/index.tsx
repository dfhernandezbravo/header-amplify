import React, { useMemo } from 'react';
import Tooltip from './toolTip';
import { HeaderLink, HeaderTop, HeaderTopItem } from './styles';
import { TopBrandsStruct } from '@entities/topBrands/top-brands-entity';

interface Props {
  isCartPath:boolean
}

const topBrands: TopBrandsStruct[] = [
  {
    name: 'Paris',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/413f160b9c794687fdf789913dd18663.svg',
    link: 'https://www.paris.cl',
    toolTip: false,
    items: [],
  },
  {
    name: 'Jumbo',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/4a7dba45da83e507aa4c3480aaf4eb06.svg',
    link: 'https://www.jumbo.cl',
    toolTip: false,
    items: [],
  },
  {
    name: 'Santa Isabel',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/be6020963789abdcaf77e3778631e150.svg',
    link: 'https://www.santaisabel.cl/',
    toolTip: false,
    items: [],
  },
  {
    name: 'Mundo experto',
    link: 'https://mundoexperto.cl/',
    toolTip: false,
    items: [],
  },
  {
    name: 'Puntos Cencosud',
    link: 'https://www.puntoscencosud.cl/puntos/',
    toolTip: false,
    items: [],
  },
  {
    name: 'Tarjeta Cencosud',
    link: 'https://www.puntoscencosud.cl/puntos/',
    toolTip: true,
    items: [
      {
        text: 'Paga tu tarjeta',
        link: 'https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-cuenta?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20cuenta',
        icon: 'wallet',
      },
      {
        text: 'Simula un avance',
        link: 'https://www.tarjetacencosud.cl/publico/producto/avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20avance',
        icon: 'advance-simulation',
      },
      {
        text: 'Simula un Super avance',
        link: 'https://www.tarjetacencosud.cl/publico/producto/super-avance/landing/simulador?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=simula%20tu%20super%20avance',
        icon: 'bag',
      },
      {
        text: 'Paga tu credito de consumo',
        link: 'https://www.tarjetacencosud.cl/publico/pagos/landing/paga-tu-credito-de-consumo?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=paga%20tu%20credito%20de%20consumo',
        icon: 'hand',
      },
      {
        text: 'Solicita tu tarjeta',
        link: 'https://www.mitarjetacencosud.cl/tarjeta-digital?utm_medium=header%20tarjeta&utm_source=easy_cl&utm_campaign=solicita%20tu%20tarjeta',
        icon: 'card',
      },
    ],
  },
  {
    name: 'Centro de ayuda',
    link: 'https://ayuda.easy.cl/',
    toolTip: false,
    items: [],
  },
  {
    name: 'Mis compras',
    link: 'https://ayuda.easy.cl/ayuda/transacciones',
    toolTip: false,
    items: [],
  },
  {
    name: 'Tiendas',
    link: 'https://www.easy.cl/tiendas',
    toolTip: false,
    items: [],
  },
];

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
