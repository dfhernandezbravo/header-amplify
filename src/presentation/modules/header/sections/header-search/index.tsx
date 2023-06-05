import React, { useState } from 'react';
import { SearchContainer, SearchInput } from './styles';
// import useGetSearchesPopular from '@use-cases/search/get-searches-populars';

const HeaderSearch = React.memo(function Search() {
  // const { popularSearches, isLoading, error } = useGetSearchesPopular();
  // const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="¡Hola! ¿Qué estás buscando?"
        // onFocus={() => setIsOpenMenu(true)}
        // onBlur={() => setIsOpenMenu(false)}
      />
    </SearchContainer>
  );
});

export default HeaderSearch;
