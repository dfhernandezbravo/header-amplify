import { SearchListContainer } from './styles';
import RecentResultsList from './recent-results-list';
import PopularSearchesList from './popular-searches-list';

const InitialSearchesList = () => {
  return (
    <SearchListContainer>
      <RecentResultsList />
      <PopularSearchesList />
    </SearchListContainer>
  );
};

export default InitialSearchesList;
