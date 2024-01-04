import Spinner from '@components/atoms/spinner';
import { useAppSelector } from '@hooks/storeHooks';
import EmptySearch from '@modules/header/components/empty-searches-list';
import PopularSearchesList from '@modules/header/components/initial-searches-list';
import SearchList from '@modules/header/components/searches-list';
import HeaderSuggestions from '../header-suggestions';
import { HeaderResultSpinnerContainer, HeaderResultsContainer } from './styles';
import { useEffect, useState } from 'react';

const HeaderResults = () => {
  const [showPopularResults, setShowPopularResults] = useState(true);
  const { isLoading, isEmptySearch, popularSearches, searches, searchWidth } =
    useAppSelector((state) => state.search);

  useEffect(() => {
    if (!isLoading && (!searches || searches?.length === 0))
      setShowPopularResults(true);
    else setShowPopularResults(false);
  }, [isLoading, searches]);

  return (
    <HeaderResultsContainer width={`${searchWidth}px` || '100%'}>
      {isLoading && (
        <HeaderResultSpinnerContainer>
          <Spinner />
        </HeaderResultSpinnerContainer>
      )}
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
