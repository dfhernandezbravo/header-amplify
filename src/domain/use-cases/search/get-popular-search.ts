import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';

export const getPopularSearch = createAsyncThunk(
  'get/search/popular',
  async () => {
    try {
      const { data } = await searchService.getPopularSearches();
      return data.searches;
    } catch (error) {
      console.error(error);
    }
  },
);
