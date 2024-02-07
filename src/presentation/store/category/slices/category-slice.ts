import { Category } from '@entities/category/category.entity';
import { createSlice } from '@reduxjs/toolkit';

type CategoryState = {
  isOpenCategories: boolean;
  categories: Category[];
};

const initialState: CategoryState = {
  isOpenCategories: false,
  categories: [],
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
    setCategories: (state, { payload }: { payload: Category[] }) => {
      state.categories = payload;
    },
  },
});

export const { openCategories, closeCategories, setCategories } =
  categorySlice.actions;
export default categorySlice;
