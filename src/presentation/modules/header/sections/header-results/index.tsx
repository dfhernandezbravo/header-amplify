/* eslint-disable no-undef */
import Spinner from '@components/atoms/spinner';
import { useAppSelector } from '@hooks/storeHooks';
import EmptySearch from '@modules/header/components/empty-searches-list';
import PopularSearchesList from '@modules/header/components/initial-searches-list';
import SearchList from '@modules/header/components/searches-list';
import HeaderSuggestions from '../header-suggestions';
import {
  HeaderResultSpinnerContainer,
  HeaderResultsContainer,
  TextContent,
  LoadingContainer,
} from './styles';
import { useEffect, useState } from 'react';
import NoContentResults from './components/no-content-results';

const HeaderResults = () => {
  const [showPopularResults, setShowPopularResults] = useState(true);
  const [showNoContent, setShowNoContent] = useState(false);
  const { isLoading, isEmptySearch, popularSearches, searches, searchWidth } =
    useAppSelector((state) => state.search);

  useEffect(() => {
    if (!isLoading && (!searches || searches?.length === 0))
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
      {isLoading && !showNoContent && (
        <LoadingContainer>
          <HeaderResultSpinnerContainer>
            <Spinner />
          </HeaderResultSpinnerContainer>
          <TextContent>
            <h4>Buscando artículos</h4>
            <p>Espere un segundo...</p>
          </TextContent>
        </LoadingContainer>
      )}
      {showNoContent && <NoContentResults />}
      {searches?.length > 0 && (
        <>
          <SearchList />
          <HeaderSuggestions />
        </>
      )}
      {isEmptySearch && <EmptySearch />}
      {showPopularResults && popularSearches?.length > 0 && (
        <PopularSearchesList />
      )}
    </HeaderResultsContainer>
  );
};

export default HeaderResults;
