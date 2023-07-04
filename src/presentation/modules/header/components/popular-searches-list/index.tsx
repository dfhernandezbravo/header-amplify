import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { PopularSearchItem, PopularSearchListContainer } from './styles';
import { environments } from '@env/environments';

// TODO: Redirigir a un href devuelto por backend

const PopularSearchesList = () => {
  const { popularSearches } = useAppSelector((state) => state.search);
  const { hostURL } = environments();

  return (
    <PopularSearchListContainer>
      <h4>Búsquedas populares </h4>

      {popularSearches.map((search) => (
        <PopularSearchItem
          key={search.term}
          href={`${hostURL}/${search.term}?map=ft`}
        >
          {search.term}
        </PopularSearchItem>
      ))}
    </PopularSearchListContainer>
  );
};

export default PopularSearchesList;
