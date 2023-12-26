import Desktop from '@components/layout/desktop';
import { useAppSelector } from '@hooks/storeHooks';
import SuggestionPrice from '../../components/suggestion-price';
import SuggestionImage from '../../components/suggestions-image';
import {
  SuggestionBrand,
  SuggestionName,
  SuggestionsContainer,
  SuggestionsItemContainer,
  SuggestionsListContainer,
} from './styles';

const HeaderSuggestionsDesktop = () => {
  const { productSuggestions } = useAppSelector((state) => state.search);

  return (
    <Desktop>
      <SuggestionsContainer>
        <h4>Resultados de productos </h4>

        <SuggestionsListContainer>
          {productSuggestions.map((product) => (
            <SuggestionsItemContainer
              key={product.productId}
              href={product.link}
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
