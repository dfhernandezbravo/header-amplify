import { useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { PopularSearchItem, PopularSearchListContainer } from './styles';

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
    <PopularSearchListContainer>
      <h4>Búsquedas populares </h4>

      {popularSearches?.map((search) => (
        <PopularSearchItem
          key={search.term}
          href={`/${search.term}?map=ft`}
          onClick={(e) => {
            e.stopPropagation();
            handleOnClick(search.term);
          }}
        >
          {search.term}
        </PopularSearchItem>
      ))}
    </PopularSearchListContainer>
  );
};

export default PopularSearchesList;
