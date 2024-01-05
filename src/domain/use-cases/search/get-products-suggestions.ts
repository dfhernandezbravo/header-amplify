import { ProductSuggestionsRequest } from '@entities/search/searches.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';

export const getProductsSuggestions = createAsyncThunk(
  '/get/products/search/suggestions',
  async (params: ProductSuggestionsRequest) => {
    try {
      const { data } = await searchService.getProductSuggestions(params);
      const limit = 4;
      const length = data?.products?.length || 0;
      if (length === 0) return [];
      else return length > 4 ? data?.products?.slice(0, limit) : data?.products;
    } catch (error) {
      throw new Error('Oh no!!');
    }
  },
);
