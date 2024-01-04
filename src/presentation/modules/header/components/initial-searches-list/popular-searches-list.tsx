import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import {
  PopularSearchItem,
  IconRightContainer,
  ContainerPopulars,
} from './styles';
import IconArrowUpLeft from '@assets/icons/categories/icon-arrow-up-left.svg';
import Image from 'next/image';

const PopularSearchesList = () => {
  const { popularSearches } = useAppSelector((state) => state.search);
  const { sendEventAnalytics } = useAnalytics();

  const handleOnClick = (term: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Término Búsqueda populares',
      tag: term,
    });
  };

  return (
    <ContainerPopulars>
      <h4>Búsquedas populares 🔥</h4>
      {popularSearches?.map((search) => (
        <PopularSearchItem
          key={search.term}
          href={`/search/${search.term}`}
          onClick={(e) => {
            e.stopPropagation();
            handleOnClick(search.term);
          }}
        >
          {search.term}
          <IconRightContainer
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick(search.term);
            }}
          >
            <Image
              src={IconArrowUpLeft}
              alt={search.term}
              width={16}
              height={16}
              priority
            />
          </IconRightContainer>
        </PopularSearchItem>
      ))}
    </ContainerPopulars>
  );
};

export default PopularSearchesList;
