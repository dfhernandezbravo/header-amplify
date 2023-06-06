import easyBffMobileInstance from '@data-sources/http-instances/easy-bff-mobile-instance';
import PopularSearch from '@entities/business/search/popular-search.entity';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchRepository from '@repositories/search/search-repository';

const repository = searchRepository(easyBffMobileInstance);

export const getPopularSearch = createAsyncThunk(
  'get/products/search/popular',
  async () => {
    try {
      const { data } = await repository.getPopularSearches();
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
    popularSearches: [] as PopularSearch[],
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
