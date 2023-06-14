import React, { useEffect } from 'react';
import { SearchContainer, SearchInput } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import { closeResults, openResults } from '@store/search/slices/search-slice';

const HeaderSearch = React.memo(function Search() {
  const dispacth = useAppDispatch();

  useEffect(() => {
    dispacth(getPopularSearch());
  }, [dispacth]);

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="¡Hola! ¿Qué estás buscando?"
        onFocus={() => dispacth(openResults())}
        onBlur={() => dispacth(closeResults())}
      />
    </SearchContainer>
  );
});

export default HeaderSearch;
