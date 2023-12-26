import Mobile from '@components/layout/mobile';
import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import Image from 'next/image';
import {
  SuggestionBrand,
  SuggestionName,
} from '../header-suggestions-desktop/styles';
import {
  SuggestionsMobileContainer,
  SuggestionsMobileDetail,
  SuggestionsMobileItem,
} from './styles';

const HeaderSuggestionsMobile = () => {
  const { productSuggestions } = useAppSelector((state) => state.search);
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClick = (product: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Producto Sugerido',
      tag: product,
    });
  };

  return (
    <Mobile>
      <SuggestionsMobileContainer>
        <h5>Resultados de productos</h5>

        {productSuggestions?.map((product) => (
          <SuggestionsMobileItem
            key={product.productId}
            href={product.link}
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(product.productName);
            }}
          >
            <Image
              src={product?.items[0]?.images[0]?.imageUrl}
              width={60}
              height={60}
              alt={product?.items[0]?.images[0]?.imageLabel}
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
