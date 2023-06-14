import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { PopularSearchItem, PopularSearchListContainer } from './styles';

// TODO: Redirigir a un href devuelto por backend

const PopularSearchesList = () => {
  const { popularSearches } = useAppSelector((state) => state.search);

  return (
    <PopularSearchListContainer>
      <h4>Búsquedas populares </h4>

      {popularSearches.map((search) => (
        <PopularSearchItem key={search.term} href="">
          {search.term}
        </PopularSearchItem>
      ))}
    </PopularSearchListContainer>
  );
};

export default PopularSearchesList;
