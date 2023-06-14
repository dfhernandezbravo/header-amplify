import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { SearchItem, SearchListContainer } from './styles';

// TODO: Redirigir a la plp de cada producto

const SearchList = () => {
  const { searches } = useAppSelector((state) => state.search);

  return (
    <SearchListContainer>
      {searches.map((search) => (
        <SearchItem href="" key={search.value}>
          {search.value}
        </SearchItem>
      ))}
    </SearchListContainer>
  );
};

export default SearchList;
