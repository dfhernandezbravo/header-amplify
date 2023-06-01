import { SearchContainer, SearchInput } from './search.styles';
// import useGetSearchesPopular from '@use-cases/search/get-searches-populars';

const Search = () => {
  // const { data: response, isLoading, error } = useGetSearchesPopular();
  // const { data } = response;
  //
  // console.log(data?.data.data.searches);

  return (
    <SearchContainer>
      <SearchInput type="search" placeholder="¡Hola! ¿Qué estás buscando?" />
    </SearchContainer>
  );
};
export default Search;
