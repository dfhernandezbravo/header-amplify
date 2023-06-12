import PopularSearch from '@entities/search/popular-search.entity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchService from '../../../application/services/search';


export const getPopularSearch = createAsyncThunk(
  'get/products/search/popular',
  async () => {
    try {
      const { data } = await searchService.getPopularSearch();
      return data.data.searches;
    } catch (error) {
      console.error(error);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    popularSearches: [] as PopularSearch[] | undefined,
    // error: unknown;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularSearch.fulfilled, (state, { payload }) => {
        state.popularSearches = payload;
        state.isLoading = false;
      })
      .addCase(getPopularSearch.pending, (state) => {
        state.isLoading = true;
      });
    // .addCase(getPopularSearch.rejected, (state) )
  },
});

export default searchSlice;
