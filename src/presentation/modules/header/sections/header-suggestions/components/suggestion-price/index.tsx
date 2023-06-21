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

function getPercentage(price: number, listPrice: number) {
  const diff = listPrice - price;
  const percentage = (diff / listPrice) * 100;

  return Math.round(percentage);
}

const formatCurrency = (amount: number) =>
  amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

const SuggestionPrice: React.FC<Props> = ({ sellers }) => {
  const { commertialOffer } = sellers[0];
  const { Price, ListPrice } = commertialOffer;
  const discountPercentage = getPercentage(Price, ListPrice);

  return (
    <div>
      <SuggestionPriceContainer>
        <SuggestionAmount>{formatCurrency(Price)}</SuggestionAmount>

        {discountPercentage > 0 && (
          <SuggestionDiscount>{discountPercentage}%</SuggestionDiscount>
        )}
      </SuggestionPriceContainer>

      {discountPercentage > 0 && (
        <SuggestionListPrice>
          Normal: {formatCurrency(ListPrice)}
        </SuggestionListPrice>
      )}
    </div>
  );
};

export default SuggestionPrice;
