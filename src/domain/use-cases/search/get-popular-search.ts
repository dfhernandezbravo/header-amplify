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
