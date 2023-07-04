import Spinner from '@components/atoms/spinner';
import Desktop from '@components/layout/desktop';
import { environments } from '@env/environments';
import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import SuggestionPrice from './components/suggestion-price';
import SuggestionImage from './components/suggestions-image';
import {
  SuggestionBrand,
  SuggestionName,
  SuggestionSpinnerContainer,
  SuggestionsContainer,
  SuggestionsItemContainer,
  SuggestionsListContainer,
} from './styles';

const HeaderSuggestions = () => {
  const { productSuggestions, isLoadingSuggestions } = useAppSelector(
    (state) => state.search,
  );
  const { hostURL } = environments();

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
            <SuggestionsItemContainer
              key={product.productId}
              href={`${hostURL}${product.link}`}
            >
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
