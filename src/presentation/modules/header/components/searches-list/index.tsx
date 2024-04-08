import { ItemSearch, Search } from '@entities/search/searches.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import {
  SearchCategoriesTitle,
  SearchItem,
  SearchItemCategory,
  SearchListContainer,
  SearchViewAll,
} from './styles';
import React from 'react';
import SuggestionsHighlight from '@modules/header/sections/header-suggestions/components/suggestions-highlights';
import {
  closeResults,
  setRecentSearches,
} from '@store/search/slices/search-slice';

const SearchList = () => {
  const { searches, categories, term, brands } = useAppSelector(
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

  const onMouseOverItemSearch = (itemSelected: ItemSearch) => {
    dispatch(
      getProductsSuggestions({
        fullText: '',
        selectedFacets: {
          key: itemSelected.query,
          value: itemSelected.value,
        },
      }),
    );
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
