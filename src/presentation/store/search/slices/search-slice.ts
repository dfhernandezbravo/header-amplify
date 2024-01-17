import PopularSearch from '@entities/search/popular-search.entity';
import {
  CategoriesSearch,
  Product,
  Search,
} from '@entities/search/searches.entity';
import { createSlice } from '@reduxjs/toolkit';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import { getProductsSuggestions } from '@use-cases/search/get-products-suggestions';
import { getSearches } from '@use-cases/search/get-searches';

type SearchState = {
  isLoading: boolean;
  isOpenResults: boolean;
  isEmptySearch: boolean;
  isLoadingSuggestions: boolean;
  term: string;
  popularSearches: PopularSearch[];
  searches: Search[];
  categories: CategoriesSearch[];
  productSuggestions: Product[];
  searchWidth: null | number;
  recentSearches: string[];
};

const initialState: SearchState = {
  popularSearches: [],
  searches: [],
  categories: [],
  productSuggestions: [],
  term: '',
  isLoading: false,
  isOpenResults: false,
  isEmptySearch: false,
  isLoadingSuggestions: false,
  searchWidth: null,
  recentSearches: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    openResults: (state) => {
      state.isOpenResults = true;
      state.isEmptySearch = false;
    },
    closeResults: (state) => {
      state.isOpenResults = false;
      state.isEmptySearch = false;
    },
    cleanResults: (state) => {
      state.isEmptySearch = false;
      state.searches = [];
    },
    setTerm: (state, { payload }: { payload: string }) => {
      state.term = payload;
    },
    setSearchWidth: (state, { payload }) => {
      state.searchWidth = payload;
    },
    setRecentSearches: (state, { payload }) => {
      if (!payload) return;

      const MAX_ITEMS = 7;
      const recentSearches = state.recentSearches;

      if (recentSearches.length === 0) {
        state.recentSearches.push(payload);
        return;
      }

      if (recentSearches.includes(payload)) return;

      if (recentSearches.length === MAX_ITEMS) {
        recentSearches.pop();
      }

      recentSearches.unshift(payload);
      state.term = '';
      state.searches = [];
    },
    removeRecentSearch: (state, { payload }) => {
      const recentSearches = state.recentSearches;
      if (recentSearches.length === 0) return;

      const updatedRecentSearches = recentSearches.filter(
        (recentSearch) => recentSearch !== payload,
      );

      state.recentSearches = updatedRecentSearches;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularSearch.fulfilled, (state, { payload }) => {
        state.popularSearches = payload || [];
        state.isLoading = false;
      })
      .addCase(getPopularSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearches.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (!payload) {
          state.isEmptySearch = true;
          state.searches = [];
          state.categories = [];
          state.productSuggestions = [];
        } else {
          state.searches = payload.searches;
          state.categories = payload.categories;
          state.isEmptySearch = false;
        }
      })
      .addCase(getSearches.pending, (state) => {
        state.isLoading = true;
        state.categories = [];
        state.searches = [];
        state.productSuggestions = [];
        state.isEmptySearch = false;
      })
      .addCase(getProductsSuggestions.fulfilled, (state, { payload }) => {
        state.isLoadingSuggestions = false;
        state.productSuggestions = payload || [];
      })
      .addCase(getProductsSuggestions.pending, (state) => {
        state.isLoadingSuggestions = true;
        state.productSuggestions = [];
      });
  },
});

export const {
  openResults,
  closeResults,
  cleanResults,
  setTerm,
  setSearchWidth,
  setRecentSearches,
  removeRecentSearch,
} = searchSlice.actions;
export default searchSlice;
