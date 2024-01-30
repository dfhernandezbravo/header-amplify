import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';

export const getPopularSearch = createAsyncThunk(
  'get/search/popular',
  async () => {
    try {
      const { data } = await searchService.getPopularSearches();
      const LIMIT = 7;
      const length = data?.searches?.length || 0;

      if (length === 0) return [];
      return length > LIMIT ? data?.searches?.slice(0, LIMIT) : data?.searches;
    } catch (error) {
      console.error(error);
    }
  },
);
