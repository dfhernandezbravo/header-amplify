import React from 'react';
import HeaderCencosuTooltip from './modal-cencosud'
import { HeaderLink, HeaderTop, HeaderTopItem } from './styles';

const topBrands = [
  {
    name: 'Paris',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/413f160b9c794687fdf789913dd18663.svg',
    link: 'https://www.paris.cl',
  },
  {
    name: 'Jumbo',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/4a7dba45da83e507aa4c3480aaf4eb06.svg',
    link: 'https://www.jumbo.cl',
  },
  {
    name: 'Santa Isabel',
    image:
      'https://easycl.vtexassets.com/_v/public/assets/v1/published/easycl.custom-blocks@4.0.21/public/react/be6020963789abdcaf77e3778631e150.svg',
    link: 'https://www.santaisabel.cl/',
  },
  {
    name: 'Mundo experto',
    link: 'https://mundoexperto.cl/',
  },
  {
    name: 'Puntos Cencosud',
    link: 'https://www.puntoscencosud.cl/puntos/',
  },
  {
    name: 'Tarjeta Cencosud',
    link: 'https://www.puntoscencosud.cl/puntos/',
  },
  {
    name: 'Centro de ayuda',
    link: 'https://ayuda.easy.cl/',
  },
  {
    name: 'Mis compras',
    link: 'https://ayuda.easy.cl/ayuda/transacciones',
  },
  {
    name: 'Tiendas',
    link: 'https://www.easy.cl/tiendas',
  },
];


function HeaderTopBrands() {
  return (
    <HeaderTop>
      {topBrands.map((brand) => (
        <HeaderTopItem key={brand.name}>
          <HeaderLink
            aria-label={`${brand.name} link`}
            href={brand.link}
            target="_blank"
            image={brand.image}
            hasTooltip={brand.name === 'Tarjeta Cencosud' ? true : false}
          >
            {!brand.image && brand.name}
            {
              brand.name === 'Tarjeta Cencosud' && <HeaderCencosuTooltip />
            }
          </HeaderLink>
        </HeaderTopItem>
      ))}
    </HeaderTop>
  );
}

export default HeaderTopBrands;
