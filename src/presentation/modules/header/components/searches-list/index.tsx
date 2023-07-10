import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import {
  SearchCategoriesTitle,
  SearchItem,
  SearchItemCategory,
  SearchListContainer,
} from './styles';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import { environments } from '@env/environments';
import useAnalytics from '@hooks/useAnalytics';

const SearchList = () => {
  const { searches, categories, term } = useAppSelector(
    (state) => state.search,
  );

  const dispatch = useAppDispatch();

  const { hostURL } = environments();

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
          href={`${hostURL}/${search.value}?map=ft`}
          key={search.value}
          onMouseOver={() => onMouseOverSearch(search)}
          onClick={(e) => {
            e.stopPropagation();
            handleOnClickSearch(search.value);
          }}
        >
          {search.value}
        </SearchItem>
      ))}

      <SearchCategoriesTitle>Categorias</SearchCategoriesTitle>

      {categories.map((category) => (
        <SearchItemCategory
          onClick={(e) => {
            e.stopPropagation();
            handleOnClickCategory(category.labelValue);
          }}
          href={`${hostURL}/${category.value}/${term}?map=${category.key},ft`}
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
