import Desktop from '@components/layout/desktop';
import React from 'react';
import {
  SuggestionBrand,
  SuggestionName,
  SuggestionSpinnerContainer,
  SuggestionsContainer,
  SuggestionsItemContainer,
  SuggestionsListContainer,
} from './styles';
import { useAppSelector } from '@hooks/storeHooks';
import Spinner from '@components/atoms/spinner';
import SuggestionImage from './components/suggestions-image';
import SuggestionPrice from './components/suggestion-price';

const HeaderSuggestions = () => {
  const { productSuggestions, isLoadingSuggestions } = useAppSelector(
    (state) => state.search,
  );

  if (isLoadingSuggestions) {
    return (
      <Desktop>
        <SuggestionSpinnerContainer>
          <Spinner />
        </SuggestionSpinnerContainer>
      </Desktop>
    );
  }

  return (
    <Desktop>
      <SuggestionsContainer>
        <h4>Resultados de productos </h4>

        <SuggestionsListContainer>
          {productSuggestions.map((product) => (
            <SuggestionsItemContainer key={product.productId} href="">
              <SuggestionImage images={product.items[0].images} />

              <SuggestionBrand>{product.brand} </SuggestionBrand>

              <SuggestionName>{product.productName}</SuggestionName>

              <SuggestionPrice sellers={product.items[0].sellers} />
            </SuggestionsItemContainer>
          ))}
        </SuggestionsListContainer>
      </SuggestionsContainer>
    </Desktop>
  );
};

export default HeaderSuggestions;
