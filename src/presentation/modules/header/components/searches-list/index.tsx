import { ItemSearch, Search } from '@entities/search/searches.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import {
  SearchCategoriesTitle,
  SearchItem,
  SearchItemCategory,
  SearchListContainer,
  SearchViewAll,
} from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import SuggestionsHighlight from '@modules/header/sections/header-suggestions/components/suggestions-highlights';
import {
  closeResults,
  setRecentSearches,
} from '@store/search/slices/search-slice';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import useDebounce from '@hooks/useDebounce';

const SearchList = () => {
  const { searches, categories, term, brands } = useAppSelector(
    (state) => state.search,
  );

  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const sendQuery = useCallback(() => {
    if (typeof debouncedSearch === 'string') {
      dispatch(
        getProductsSuggestions({
          fullText: search,
          selectedFacets: null,
        }),
      );
    }
  }, [dispatch, debouncedSearch]);

  const onMouseOverSearch = (searchSelected: Search) => {
    if (searchSelected?.value) {
      setSearch(searchSelected.value);
    }
  };

  const onMouseOverItemSearch = (itemSelected: ItemSearch) => {
    if (itemSelected?.value) {
      setSearch(itemSelected.value);
    }
  };

  const handleOnClickItemSearch = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: string,
    type: string,
  ) => {
    e.stopPropagation();
    setTimeout(() => {
      sendEventAnalytics({
        event: 'interaccion',
        category: 'Búsqueda',
        action: `Click ${type}`,
        tag: value,
      });
      dispatch(closeResults());
    }, 1000);
  };

  useEffect(() => {
    if (debouncedSearch) sendQuery();
  }, [debouncedSearch, sendQuery]);

  return (
    <SearchListContainer>
      {searches?.map((search) => (
        <SearchItem
          href={`/search/${search.value}`}
          key={search.value}
          onMouseOver={() => onMouseOverSearch(search)}
          onClick={(e) => {
            handleOnClickItemSearch(e, search.value, 'Término Sugerido');
            dispatch(setRecentSearches(search.value));
          }}
        >
          <SuggestionsHighlight value={search.value} term={term} />
        </SearchItem>
      ))}

      {categories?.length && (
        <SearchCategoriesTitle>Categorías</SearchCategoriesTitle>
      )}
      {categories?.map((category, index) => (
        <SearchItemCategory
          onClick={(e) => {
            handleOnClickItemSearch(e, category.value, 'Categoria Sugerida');
          }}
          href={`/search/${category.value}?filter=${category.filter}`}
          key={`category-${index}-${category.value}`}
          onMouseOver={() => onMouseOverItemSearch(category)}
        >
          {category.value}
        </SearchItemCategory>
      ))}

      {brands?.length ? (
        <>
          <SearchCategoriesTitle>Marcas</SearchCategoriesTitle>
          {brands?.map((brand, index) => (
            <SearchItemCategory
              onClick={(e) => {
                handleOnClickItemSearch(e, brand.value, 'Marga Sugerida');
              }}
              href={`/search/${brand.value}?filter=${brand.filter}`}
              key={`brand-${index}-${brand.value}`}
              onMouseOver={() => onMouseOverItemSearch(brand)}
            >
              {brand.value}
            </SearchItemCategory>
          ))}
        </>
      ) : null}

      <SearchViewAll href={`/search/${term}`}>
        Ver todos los productos
      </SearchViewAll>
    </SearchListContainer>
  );
};

export default SearchList;
