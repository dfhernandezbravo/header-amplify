import Spinner from '@components/atoms/spinner';
import { useAppSelector } from '@hooks/storeHooks';
import EmptySearch from '@modules/header/components/empty-searches-list';
import PopularSearchesList from '@modules/header/components/popular-searches-list';
import SearchList from '@modules/header/components/searches-list';
import HeaderSuggestions from '../header-suggestions';
import { HeaderResultSpinnerContainer, HeaderResultsContainer } from './styles';

const HeaderResults = () => {
  const { isLoading, isEmptySearch, popularSearches, searches } =
    useAppSelector((state) => state.search);

  return (
    <HeaderResultsContainer>
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
      {popularSearches?.length > 0 && <PopularSearchesList />}
    </HeaderResultsContainer>
  );
};

export default HeaderResults;
