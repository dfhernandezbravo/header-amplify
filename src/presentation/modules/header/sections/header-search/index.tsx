import React, { useCallback, useEffect, useState } from 'react';
import { SearchContainer, SearchInput } from './styles';
import { useAppDispatch } from '@hooks/storeHooks';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import {
  cleanResults,
  closeResults,
  openResults,
  setTerm,
} from '@store/search/slices/search-slice';
import useDebounce from '@hooks/useDebounce';
import { getSearches } from '@use-cases/search/get-searches';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';

const HeaderSearch = React.memo(function Search() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useAppDispatch();

  const sendQuery = useCallback(() => {
    dispatch(setTerm(search));
    dispatch(getSearches(search));
    dispatch(
      getProductsSuggestions({ fullText: search, selectedFacets: null }),
    );
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(getPopularSearch());
  }, [dispatch]);

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
        onFocus={() => dispatch(openResults())}
        onBlur={() =>
          setTimeout(() => {
            dispatch(closeResults());
          }, 100)
        }
        onChange={(e) => {
          if (e.target.value === '') {
            dispatch(cleanResults());
          }
          setSearch(e.target.value);
        }}
      />
    </SearchContainer>
  );
});

export default HeaderSearch;
