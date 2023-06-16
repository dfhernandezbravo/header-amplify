import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from '@services/category';

const getCategories = createAsyncThunk('get/categories', async () => {
  try {
    const { data } = await categoryService.getCategories();
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export default getCategories;
