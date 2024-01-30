import { ProductSeller } from '@entities/search/searches.entity';
import React from 'react';
import {
  SuggestionAmount,
  SuggestionDiscount,
  SuggestionListPrice,
  SuggestionPriceContainer,
} from './styles';

interface Props {
  sellers: ProductSeller[];
}

type currencyFormatter = {
  currency: string;
  value: number;
};

function getPercentage(price: number, listPrice: number) {
  const diff = listPrice - price;
  const percentage = (diff / listPrice) * 100;

  return Math.round(percentage);
}

const currencyFormatterCLP = ({ currency, value }: currencyFormatter) => {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currencySign: 'accounting',
    currency,
  });
  return formatter.format(value);
};

export const formattedCLP = (value: number) => {
  return currencyFormatterCLP({
    currency: 'CLP',
    value,
  });
};

const SuggestionPrice: React.FC<Props> = ({ sellers }) => {
  const { commertialOffer } = sellers[0];
  const { Price, ListPrice } = commertialOffer;
  const discountPercentage = getPercentage(Price, ListPrice);

  return (
    <div>
      <SuggestionPriceContainer>
        <SuggestionAmount>{formattedCLP(Price)}</SuggestionAmount>

        {discountPercentage > 0 && (
          <SuggestionDiscount>{discountPercentage}%</SuggestionDiscount>
        )}
      </SuggestionPriceContainer>

      {discountPercentage > 0 && (
        <SuggestionListPrice>
          Normal: {formattedCLP(ListPrice)}
        </SuggestionListPrice>
      )}
    </div>
  );
};

export default SuggestionPrice;
