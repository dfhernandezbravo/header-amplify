/* eslint-disable no-undef */
import { useAppSelector } from '@hooks/storeHooks';
import EmptySearch from '@modules/header/components/empty-searches-list';
import PopularSearchesList from '@modules/header/components/initial-searches-list';
import SearchList from '@modules/header/components/searches-list';
import HeaderSuggestions from '../header-suggestions';
import {
  HeaderResultsContainer,
  SearchContainerResults,
  NoContentContainer,
} from './styles';
import { useEffect, useState } from 'react';
import NoContentResults from './components/no-content-results';
import RecentResultsList from '@modules/header/components/initial-searches-list/recent-results-list';
import LoadingContent from './components/loading-content';

const HeaderResults = () => {
  const [showPopularResults, setShowPopularResults] = useState(true);
  const [showNoContent, setShowNoContent] = useState(false);
  const {
    isLoading,
    isEmptySearch,
    popularSearches,
    searches,
    searchWidth,
    term,
  } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (!isLoading && (!searches || searches?.length === 0 || !term))
      setShowPopularResults(true);
    else setShowPopularResults(false);
  }, [isLoading, searches]);

  useEffect(() => {
    let seconds = 0;
    const limit = 4;
    let interval: string | number | NodeJS.Timer | undefined;
    const counter = () => {
      if (seconds === limit) {
        clearInterval(interval);
        setShowNoContent(true);
      }
      seconds++;
    };
    if (isLoading) {
      interval = setInterval(counter, 1000);
    } else {
      setShowNoContent(false);
      clearInterval(interval);
      seconds = 0;
    }
    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  return (
    <HeaderResultsContainer width={`${searchWidth}px` || '100%'}>
      <LoadingContent isLoading={isLoading} showNoContent={showNoContent} />
      {showNoContent && (
        <NoContentContainer>
          <RecentResultsList />
          <NoContentResults />
        </NoContentContainer>
      )}
      {!showPopularResults && searches?.length > 0 && (
        <SearchContainerResults>
          <SearchList />
          <HeaderSuggestions />
        </SearchContainerResults>
      )}
      {isEmptySearch && <EmptySearch />}
      {showPopularResults && popularSearches?.length > 0 && (
        <PopularSearchesList />
      )}
    </HeaderResultsContainer>
  );
};

export default HeaderResults;
