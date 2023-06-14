import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '../../../application/services/search';

export const getSearches = createAsyncThunk(
  'get/products/search',
  async (query: string) => {
    try {
      const { data } = await searchService.getSearches({ query });
      return data.data.searches;
    } catch (error) {
      console.error(error);
    }
  },
);
