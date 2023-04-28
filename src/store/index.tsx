/* eslint-disable react/display-name */
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";

const store = configureStore({
  reducer: {
    cartHeader: cartSlice.reducer
  }
});
export default store;