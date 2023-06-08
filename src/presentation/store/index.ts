/* eslint-disable react/display-name */
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import searchSlice from './search/slices/search-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
  },
});
export default store;
