import Spinner from '@components/atoms/spinner';
import { useAppSelector } from '@hooks/storeHooks';
import PopularSearchesList from '@modules/header/components/popular-searches-list';
import SearchList from '@modules/header/components/searches-list';
import React from 'react';
import { HeaderResultsContainer } from './styles';
import EmptySearch from '@modules/header/components/empty-searches-list';

const HeaderResults = () => {
  const { isOpenResults, isLoading, isEmptySearch, popularSearches, searches } =
    useAppSelector((state) => state.search);

  if (isOpenResults && isLoading) {
    return (
      <HeaderResultsContainer>
        <Spinner />
      </HeaderResultsContainer>
    );
  }

  if (isOpenResults && searches.length) {
    return (
      <HeaderResultsContainer>
        <SearchList />
      </HeaderResultsContainer>
    );
  }

  if (isOpenResults && isEmptySearch) {
    return (
      <HeaderResultsContainer>
        <EmptySearch />
      </HeaderResultsContainer>
    );
  }

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
