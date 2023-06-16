import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';

export const getPopularSearch = createAsyncThunk(
  'get/products/search/popular',
  async () => {
    try {
      const { data } = await searchService.getPopularSearches();
      return data.data.searches;
    } catch (error) {
      console.error(error);
    }
  },
);
