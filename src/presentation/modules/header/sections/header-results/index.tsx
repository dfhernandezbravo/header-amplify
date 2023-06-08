import { useAppSelector } from '@hooks/storeHooks';
import PopularSearchesList from '@modules/header/components/popular-searches-list';
import React from 'react';
import { HeaderResultsContainer } from './styles';

const HeaderResults = () => {
  const { isOpenResults, popularSearches } = useAppSelector(
    (state) => state.search,
  );

  if (isOpenResults && popularSearches.length) {
    return (
      <HeaderResultsContainer>
        <PopularSearchesList />
      </HeaderResultsContainer>
    );
  }

  return null;
};

export default HeaderResults;
