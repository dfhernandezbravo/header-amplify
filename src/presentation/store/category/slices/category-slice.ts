import { createSlice } from '@reduxjs/toolkit';
import getCategories from '@use-cases/category/get-categories';

type CategoryState = {
  categories: Category[];
  isLoading: boolean;
  isOpenCategories: boolean;
};

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    isLoading: false,
    isOpenCategories: false,
  } as CategoryState,
  reducers: {
    openCategories: (state, { payload }) => {
      state.isOpenCategories = payload || false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload || [];
        state.isLoading = false;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const { openCategories } = categorySlice.actions;
export default categorySlice;
