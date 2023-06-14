import PopularSearch from '@entities/search/popular-search.entity';
import { createSlice } from '@reduxjs/toolkit';
import { getPopularSearch } from '@use-cases/search/get-popular-search';
import { getSearches } from '@use-cases/search/get-searches';

type SearchState = {
  isLoading: boolean;
  popularSearches: PopularSearch[];
  isOpenResults: boolean;
  searches: Search[];
  isEmptySearch: boolean;
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    popularSearches: [],
    searches: [],
    isOpenResults: false,
    isEmptySearch: false,
    // error: unknown;
  } as SearchState,
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
        if (!payload || !payload.length) {
          state.isEmptySearch = true;
          state.searches = [];
        } else {
          state.searches = payload;
          state.isEmptySearch = false;
        }
        state.isLoading = false;
      })
      .addCase(getSearches.pending, (state) => {
        state.isLoading = true;
      });
    // .addCase(getPopularSearch.rejected, (state) )
  },
});

export const { openResults, closeResults, cleanResults } = searchSlice.actions;
export default searchSlice;
