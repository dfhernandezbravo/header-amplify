import React from 'react';
import { SuggestionPriceContainer } from './styles';
import { Product } from '@entities/search/searches.entity';
import M2Price from '@components/atoms/prices/M2Price';
import Price from '@components/atoms/prices/Price';
interface Props {
  product: Product;
}
const SuggestionPrice: React.FC<Props> = ({ product }) => {
  return (
    <SuggestionPriceContainer>
      {product.pricesM2 ? (
        <M2Price
          price={product.prices}
          adjustments={product.adjustments || []}
          priceM2={product.pricesM2}
        />
      ) : (
        <Price price={product.prices} adjustments={product.adjustments || []} />
      )}
    </SuggestionPriceContainer>
  );
};

export default SuggestionPrice;
