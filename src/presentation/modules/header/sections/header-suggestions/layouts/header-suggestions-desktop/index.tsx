import Desktop from '@components/layout/desktop';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import SuggestionPrice from '../../components/suggestion-price';
import SuggestionImage from '../../components/suggestions-image';
import {
  SuggestionBrand,
  SuggestionName,
  SuggestionsContainer,
  SuggestionsItemContainer,
  SuggestionsListContainer,
} from './styles';
import { setRecentSearches } from '@store/search/slices/search-slice';

const HeaderSuggestionsDesktop = () => {
  const { productSuggestions } = useAppSelector((state) => state.search);
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
          {productSuggestions.map((product) => (
            <SuggestionsItemContainer
              key={product.productId}
              href={product.link}
              onClick={() => handleClick(product.productName)}
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

export default HeaderSuggestionsDesktop;
