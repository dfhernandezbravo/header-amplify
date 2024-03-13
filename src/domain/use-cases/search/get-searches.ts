import { createAsyncThunk } from '@reduxjs/toolkit';
import searchService from '@services/search';
import dispatchSearchResultsEvent from './dispatch-search-results-event';

export const getSearches = createAsyncThunk(
  'get/products/search',
  async (query: string) => {
    try {
      const { data } = await searchService.getSearches({ query });
      dispatchSearchResultsEvent(query, data.searches.length);
      return data;
    } catch (error) {
      dispatchSearchResultsEvent(query, 0);
      throw new Error('Oh no!!');
    }
  },
);
