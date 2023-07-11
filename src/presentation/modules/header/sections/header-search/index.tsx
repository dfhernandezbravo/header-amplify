import React, { useCallback, useEffect, useState } from 'react';
import { SearchContainer, SearchInput } from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
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
import useAnalytics from '@hooks/useAnalytics';

const HeaderSearch = React.memo(function Search() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();
  const { searches } = useAppSelector((state) => state.search);

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

  useEffect(() => {
    if (searches.length && search !== '') {
      sendEventAnalytics({
        event: 'interaccion',
        category: 'Búsqueda',
        action: 'Con resultados',
        tag: search,
      });
    }

    if (!searches.length && search !== '') {
      sendEventAnalytics({
        event: 'interaccion',
        category: 'Búsqueda',
        action: 'Sin resultados',
        tag: search,
      });
    }
  }, [searches, sendEventAnalytics, search]);

  const handleOnClickSearch = () => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Header',
      action: 'Click',
      tag: 'Contenedor Buscador',
    });
  };

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
        onClick={handleOnClickSearch}
      />
    </SearchContainer>
  );
});

export default HeaderSearch;
