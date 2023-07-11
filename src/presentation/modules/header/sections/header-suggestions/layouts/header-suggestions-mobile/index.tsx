import Mobile from '@components/layout/mobile';
import { useAppSelector } from '@hooks/storeHooks';
import Image from 'next/image';
import React from 'react';
import {
  SuggestionBrand,
  SuggestionName,
} from '../header-suggestions-desktop/styles';
import {
  SuggestionsMobileContainer,
  SuggestionsMobileDetail,
  SuggestionsMobileItem,
} from './styles';
import { environments } from '@env/environments';
import useAnalytics from '@hooks/useAnalytics';

const HeaderSuggestionsMobile = () => {
  const { productSuggestions } = useAppSelector((state) => state.search);
  const { hostURL } = environments();
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClick = (product: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Producto Sugerido',
      tag: product,
    });
  };

  return (
    <Mobile>
      <SuggestionsMobileContainer>
        <h5>Resultados de productos</h5>

        {productSuggestions.map((product) => (
          <SuggestionsMobileItem
            key={product.productId}
            href={`${hostURL}/${product.link}`}
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(product.productName);
            }}
          >
            <Image
              src={product.items[0].images[0].imageUrl}
              width={60}
              height={60}
              alt={product.items[0].images[0].imageLabel}
            />

            <SuggestionsMobileDetail>
              <SuggestionBrand>{product.brand} </SuggestionBrand>

              <SuggestionName>{product.productName}</SuggestionName>
            </SuggestionsMobileDetail>
          </SuggestionsMobileItem>
        ))}
      </SuggestionsMobileContainer>
    </Mobile>
  );
};

export default HeaderSuggestionsMobile;
