import { createSlice } from '@reduxjs/toolkit';

type CategoryState = {
  isOpenCategories: boolean;
};

const initialState: CategoryState = {
  isOpenCategories: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    openCategories: (state) => {
      state.isOpenCategories = true;
    },
    closeCategories: (state) => {
      state.isOpenCategories = false;
    },
  },
});

export const { openCategories, closeCategories } = categorySlice.actions;
export default categorySlice;
