import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import {
  SearchCategoriesTitle,
  SearchItem,
  SearchItemCategory,
  SearchListContainer,
} from './styles';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';

// TODO: Redirigir a la plp de cada producto

const SearchList = () => {
  const { searches, categories } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

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

  return (
    <SearchListContainer>
      {searches.map((search) => (
        <SearchItem
          href=""
          key={search.value}
          onMouseOver={() => onMouseOverSearch(search)}
        >
          {search.value}
        </SearchItem>
      ))}

      <SearchCategoriesTitle>Categorias</SearchCategoriesTitle>

      {categories.map((category) => (
        <SearchItemCategory
          href=""
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
