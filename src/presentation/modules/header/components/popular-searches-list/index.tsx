import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { PopularSearchItem, PopularSearchListContainer } from './styles';
import { environments } from '@env/environments';
import useAnalytics from '@hooks/useAnalytics';

const PopularSearchesList = () => {
  const { popularSearches } = useAppSelector((state) => state.search);
  const { hostURL } = environments();
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

      {popularSearches.map((search) => (
        <PopularSearchItem
          key={search.term}
          href={`${hostURL}/${search.term}?map=ft`}
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
