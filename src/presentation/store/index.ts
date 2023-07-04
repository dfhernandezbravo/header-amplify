/* eslint-disable react/display-name */
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import searchSlice from './search/slices/search-slice';
import categorySlice from './category/slices/category-slice';
import loginSlice from './login/slices/login-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
    category: categorySlice.reducer,
    login: loginSlice.reducer,
  },
});
export default store;
