import React, { useCallback, useEffect, useState } from 'react';
import { SearchContainer, SearchInput } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import {
  cleanResults,
  closeResults,
  openResults,
} from '@store/search/slices/search-slice';
import useDebounce from '@hooks/useDebounce';
import { getSearches } from '@use-cases/search/get-searches';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';

const HeaderSearch = React.memo(function Search() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const dispacth = useAppDispatch();

  const sendQuery = useCallback(() => {
    dispacth(getSearches(search));
    dispacth(
      getProductsSuggestions({ fullText: search, selectedFacets: null }),
    );
  }, [dispacth, search]);

  useEffect(() => {
    dispacth(getPopularSearch());
  }, [dispacth]);

  useEffect(() => {
    if (debouncedSearch) {
      sendQuery();
    }
  }, [debouncedSearch, sendQuery]);

  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="¡Hola! ¿Qué estás buscando?"
        onFocus={() => dispacth(openResults())}
        onBlur={() => dispacth(closeResults())}
        onChange={(e) => {
          if (e.target.value === '') {
            dispacth(cleanResults());
          }
          setSearch(e.target.value);
        }}
      />
    </SearchContainer>
  );
});

export default HeaderSearch;
