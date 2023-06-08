import easyBffMobileInstance from '@data-sources/http-instances/easy-bff-mobile-instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
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
