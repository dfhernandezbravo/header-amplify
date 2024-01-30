import { CategoriesSearch, Search } from '@entities/search/searches.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import {
  SearchCategoriesTitle,
  SearchItem,
  SearchItemCategory,
  SearchListContainer,
} from './styles';
import React from 'react';
import SuggestionsHighlight from '@modules/header/sections/header-suggestions/components/suggestions-highlights';
import {
  closeResults,
  setRecentSearches,
} from '@store/search/slices/search-slice';

const SearchList = () => {
  const { searches, categories, term } = useAppSelector(
    (state) => state.search,
  );

  const dispatch = useAppDispatch();
  const { sendEventAnalytics } = useAnalytics();

  const onMouseOverSearch = (searchSelected: Search) => {
    dispatch(
      getProductsSuggestions({
        fullText: searchSelected.value,
        selectedFacets: null,
      }),
    );
  };

  const onMouseOverCategory = (categorySelected: CategoriesSearch) => {
    dispatch(
      getProductsSuggestions({
        fullText: '',
        selectedFacets: {
          key: categorySelected.key,
          value: categorySelected.value,
        },
      }),
    );
  };

  const handleOnClickSearch = (search: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Término Sugerido',
      tag: search,
    });
  };

  const handleOnClickCategory = (category: string) => {
    sendEventAnalytics({
      event: 'interaccion',
      category: 'Búsqueda',
      action: 'Click Categoria Sugerida',
      tag: category,
    });
  };

  return (
    <SearchListContainer>
      {searches.map((search) => (
        <SearchItem
          href={`/search/${search.value}`}
          key={search.value}
          onMouseOver={() => onMouseOverSearch(search)}
          onClick={(e) => {
            e.stopPropagation();
            handleOnClickSearch(search.value);
            dispatch(setRecentSearches(search.value));
            dispatch(closeResults());
          }}
        >
          <SuggestionsHighlight value={search.value} term={term} />
        </SearchItem>
      ))}

      <SearchCategoriesTitle>Categorías</SearchCategoriesTitle>

      {categories.map((category) => (
        <SearchItemCategory
          onClick={(e) => {
            e.stopPropagation();
            handleOnClickCategory(category.labelValue);
            dispatch(closeResults());
          }}
          href={`/${category.value}/${term}`}
          key={category.key}
          onMouseOver={() => onMouseOverCategory(category)}
        >
          {category.labelValue}
        </SearchItemCategory>
      ))}
    </SearchListContainer>
  );
};

export default SearchList;
