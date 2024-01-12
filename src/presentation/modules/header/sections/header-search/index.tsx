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
} from '@store/search/slices/search-slice';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import { getSearches } from '@use-cases/search/get-searches';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconSearchContainer, SearchContainer, SearchInput } from './styles';
import Image from 'next/image';
import { useRecentSearches } from '@modules/header/hooks/use-recent-searches';

const HeaderSearch = React.memo(function Search() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();
  const { searches } = useAppSelector((state) => state.search);
  const { setRecentSearches } = useRecentSearches();
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleResizeSearchResults = () => {
    if (searchRef?.current) {
      const width = searchRef?.current?.offsetWidth;
      dispatch(setSearchWidth(width));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleResizeSearchResults();
    }, 300);
    window.addEventListener('resize', handleResizeSearchResults);
    return () => {
      window.removeEventListener('resize', handleResizeSearchResults);
    };
  }, []);

  const handleOnClickSearch = () => {
    dispatch(closeCategories());
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Header',
      action: 'Click',
      tag: 'Contenedor Buscador',
    });
  };

  const handleOnClickSearchIcon = () => {
    setRecentSearches(search);
    router.push(`/search/${search}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setRecentSearches(search);
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
      dispatch(closeResults());
    }, 100);
  };

  return (
    <SearchContainer ref={searchRef}>
      <IconSearchContainer onClick={handleOnClickSearchIcon}>
        <Image
          width={16}
          height={16}
          src="/icons/categories/icon-search.svg"
          alt="search"
          priority
        />
      </IconSearchContainer>
      <SearchInput
        type="search"
        placeholder="Buscar..."
        onFocus={() => dispatch(openResults())}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        onBlur={handleOnBlur}
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
