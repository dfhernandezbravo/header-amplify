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
    // .addCase(getPopularSearch.rejected, (state) )
  },
});

export const { openResults, closeResults, cleanResults, setTerm } =
  searchSlice.actions;
export default searchSlice;
