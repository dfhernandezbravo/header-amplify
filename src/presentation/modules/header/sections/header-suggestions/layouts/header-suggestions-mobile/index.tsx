import Mobile from '@components/layout/mobile';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import Image from 'next/image';
import {
  SuggestionBrand,
  SuggestionName,
} from '../header-suggestions-desktop/styles';
import {
  SuggestionSpinnerContainer,
  SuggestionsMobileContainer,
  SuggestionsMobileDetail,
  SuggestionsMobileItem,
} from './styles';
import {
  setRecentSearches,
  closeResults,
} from '@store/search/slices/search-slice';
import Spinner from '@components/atoms/spinner';

const HeaderSuggestionsMobile = () => {
  const { productSuggestions, isLoadingSuggestions } = useAppSelector(
    (state) => state.search,
  );
  const { sendEventAnalytics } = useAnalytics();
  const dispatch = useAppDispatch();

  const handleOnClick = (product: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Producto Sugerido',
      tag: product,
    });

    const term = product.split(' ')[0];
    if (term) dispatch(setRecentSearches(term.toLowerCase()));
    dispatch(closeResults());
  };

  return (
    <Mobile>
      <SuggestionsMobileContainer>
        <h5>Resultados de productos</h5>
        {isLoadingSuggestions && (
          <SuggestionSpinnerContainer>
            <Spinner />
          </SuggestionSpinnerContainer>
        )}
        {productSuggestions?.map((product) => (
          <SuggestionsMobileItem
            key={product.productId}
            href={product.linkText}
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(product.productName);
            }}
          >
            <Image
              src={product?.variants[0]?.images[0]?.imageUrl}
              width={60}
              height={60}
              alt={product?.variants[0]?.images[0]?.imageLabel}
            />

            <SuggestionsMobileDetail>
              <SuggestionBrand>{product?.brand} </SuggestionBrand>

              <SuggestionName>{product?.productName}</SuggestionName>
            </SuggestionsMobileDetail>
          </SuggestionsMobileItem>
        ))}
      </SuggestionsMobileContainer>
    </Mobile>
  );
};

export default HeaderSuggestionsMobile;
