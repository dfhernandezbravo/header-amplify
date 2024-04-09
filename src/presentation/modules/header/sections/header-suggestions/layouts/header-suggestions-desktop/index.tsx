import Desktop from '@components/layout/desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import SuggestionImage from '../../components/suggestions-image';
import {
  SuggestionBrand,
  SuggestionName,
  SuggestionSpinnerContainer,
  SuggestionsContainer,
  SuggestionsItemContainer,
  SuggestionsListContainer,
} from './styles';
import { setRecentSearches } from '@store/search/slices/search-slice';
import Spinner from '@components/atoms/spinner';
import SuggestionPrice from '../../components/suggestion-price';
import NoContentResults from '@modules/header/sections/header-results/components/no-content-results';

const HeaderSuggestionsDesktop = () => {
  const { productSuggestions, isLoadingSuggestions } = useAppSelector(
    (state) => state.search,
  );
  const dispatch = useAppDispatch();

  const handleClick = (product: string) => {
    const term = product.split(' ')[0];
    if (term) dispatch(setRecentSearches(term.toLowerCase()));
  };

  return (
    <Desktop>
      <SuggestionsContainer>
        <h4>Resultados de productos </h4>

        <SuggestionsListContainer>
          {isLoadingSuggestions && (
            <SuggestionSpinnerContainer>
              <Spinner />
            </SuggestionSpinnerContainer>
          )}
          {productSuggestions.length === 0 && !isLoadingSuggestions && (
            <NoContentResults />
          )}
          {productSuggestions.map((product) => (
            <SuggestionsItemContainer
              data-id="product-suggestion"
              key={product.productId}
              href={product.linkText}
              onClick={() => handleClick(product.productName)}
            >
              <SuggestionImage images={product.variants[0].images} />
              <SuggestionBrand data-id="product-brand">
                {product.brand}
              </SuggestionBrand>
              <SuggestionName data-id="product-name">
                {product.productName}
              </SuggestionName>
              <SuggestionPrice product={product} />
            </SuggestionsItemContainer>
          ))}
        </SuggestionsListContainer>
      </SuggestionsContainer>
    </Desktop>
  );
};

export default HeaderSuggestionsDesktop;
