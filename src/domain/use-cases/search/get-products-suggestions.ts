import { ProductSuggestionsRequest } from '@entities/search/searches.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';

export const getProductsSuggestions = createAsyncThunk(
  '/get/products/search/suggestions',
  async (params: ProductSuggestionsRequest) => {
    try {
      const { data } = await searchService.getProductSuggestions(params);
      return data.products;
    } catch (error) {
      throw new Error('Oh no!!');
    }
  },
);
