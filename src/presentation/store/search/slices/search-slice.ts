import PopularSearch from '@entities/search/popular-search.entity';
import { createSlice } from '@reduxjs/toolkit';
import { getPopularSearch } from '@use-cases/search/get-popular-search';

type SearchState = {
  isLoading: boolean;
  popularSearches: PopularSearch[];
  isOpenResults: boolean;
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    popularSearches: [],
    isOpenResults: false,
    // error: unknown;
  } as SearchState,
  reducers: {
    openResults: (state) => {
      state.isOpenResults = true;
    },
    closeResults: (state) => {
      state.isOpenResults = false;
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
      });
    // .addCase(getPopularSearch.rejected, (state) )
  },
});

export const { openResults, closeResults } = searchSlice.actions;
export default searchSlice;
