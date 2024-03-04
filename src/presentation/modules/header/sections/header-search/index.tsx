import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import useDebounce from '@hooks/useDebounce';
import { closeCategories } from '@store/category/slices/category-slice';
import {
  cleanResults,
  closeResults,
  openResults,
  setTerm,
  setSearchWidth,
  setRecentSearches,
} from '@store/search/slices/search-slice';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import { getSearches } from '@use-cases/search/get-searches';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SearchContainer, SearchInput } from './styles';
import SearchIcon from './components/search-icon';
import ClearSearchButton from './components/clear-search-button';
import useBreakpoints from '@hooks/useBreakpoints';

const HeaderSearch = React.memo(function Search() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();
  const { searches, isOpenResults } = useAppSelector((state) => state.search);
  const inputRef = useRef<HTMLInputElement>(null);
  const { device } = useBreakpoints();

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
    if (debouncedSearch) sendQuery();
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

  const handleResizeSearchResults = () => {
    if (searchRef?.current) {
      const width = searchRef?.current?.offsetWidth;
      dispatch(setSearchWidth(width));
    }
  };

  useEffect(() => {
    setTimeout(() => handleResizeSearchResults(), 300);
    window.addEventListener('resize', handleResizeSearchResults);
    return () => {
      window.removeEventListener('resize', handleResizeSearchResults);
    };
  }, []);

  useEffect(() => {
    if (device === 'Phone') inputRef?.current?.focus();
  }, [device]);

  const handleOnClickSearch = () => {
    dispatch(closeCategories());
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Header',
      action: 'Click',
      tag: 'Contenedor Buscador',
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setRecentSearches(search));
      dispatch(closeResults());
      router.push(`/search/${search}`);
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (e.relatedTarget?.id === 'remove-recent-search') {
        setTimeout(() => {
          inputRef?.current?.focus();
        }, 100);
        return;
      }
      if (device === 'Desktop') dispatch(closeResults());
    }, 100);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setSearch(value);
      dispatch(cleanResults());
      return;
    }
    const updatedValue = value.replace(
      /[^a-zA-Z´\u00C0-\u017F\u00f1\u00d1\d\s]+/g,
      '',
    );
    setSearch(updatedValue);
    if (!isOpenResults) dispatch(openResults());
  };

  return (
    <SearchContainer ref={searchRef}>
      <SearchIcon search={search} />
      <SearchInput
        type="search"
        placeholder="Buscar..."
        maxLength={30}
        onFocus={() => setTimeout(() => dispatch(openResults()), 100)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onClick={handleOnClickSearch}
        value={search}
      />
      {search && (
        <ClearSearchButton setSearch={setSearch} inputRef={inputRef} />
      )}
    </SearchContainer>
  );
});
export default HeaderSearch;
