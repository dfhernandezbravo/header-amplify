import { ContainerPopulars, SearchListContainer } from './styles';
import RecentResultsList from './recent-results-list';
import PopularSearchesList from './popular-searches-list';

const InitialSearchesList = () => {
  return (
    <SearchListContainer>
      <RecentResultsList />
      <PopularSearchesList />
      <ContainerPopulars style={{ width: 'max-content', minWidth: '25%' }} />
    </SearchListContainer>
  );
};

export default InitialSearchesList;
