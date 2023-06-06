import React, { useEffect } from 'react';
import { SearchContainer, SearchInput } from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { getPopularSearch } from '@use-cases/search/get-popular-search';

const HeaderSearch = React.memo(function Search() {
  const dispacth = useAppDispatch();
  const { isLoading, popularSearches } = useAppSelector(
    (state) => state.search,
  );
  console.log(isLoading);
  console.log(popularSearches);

  useEffect(() => {
    dispacth(getPopularSearch());
  }, [dispacth]);

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
