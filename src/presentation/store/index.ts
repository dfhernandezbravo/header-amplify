/* eslint-disable react/display-name */
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import cartSlice from './cart';
import searchSlice from './search/slices/search-slice';
import categorySlice from './category/slices/category-slice';
import loginSlice from './login/slices/login-slice';
import customerSlice from './customer/slices/customer-slice';
import errorSlice from './error/slices/error-slice';
import shoppingCartSlice from './shopping-cart/slices/shopping-cart-slice';

const persistShoppingCartConfig = {
  key: 'shopping-cart-header',
  storage,
};

const shoppingCartReducer = persistReducer(
  persistShoppingCartConfig,
  shoppingCartSlice.reducer,
);

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
    category: categorySlice.reducer,
    login: loginSlice.reducer,
    customer: customerSlice.reducer,
    error: errorSlice.reducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

export const persistor = persistStore(store);
