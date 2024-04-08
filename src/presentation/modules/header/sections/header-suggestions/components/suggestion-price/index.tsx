import React from 'react';
import { SuggestionPriceContainer } from './styles';
import { Product } from '@entities/search/searches.entity';
import dynamic from 'next/dynamic';

const Price = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.price').then(
      (module) => module.Price,
    ),
  { ssr: false },
);
interface Props {
  product: Product;
}
const SuggestionPrice: React.FC<Props> = ({ product }) => {
  return (
    <SuggestionPriceContainer>
      <Price price={product.prices} adjustments={product.adjustments} />
    </SuggestionPriceContainer>
  );
};

export default SuggestionPrice;
