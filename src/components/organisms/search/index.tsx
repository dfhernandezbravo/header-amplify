import useWindowDimensions from '@/hooks/useWindowDimensions';
import { SearchContainer, SearchInput } from './search.styles';

const Search = () => {
  const { width } = useWindowDimensions();

  return (
    <SearchContainer data-mobile={width < 1026}>
      <SearchInput type="search" placeholder="¡Hola! ¿Qué estás buscando?" />
    </SearchContainer>
  );
};
export default Search;
