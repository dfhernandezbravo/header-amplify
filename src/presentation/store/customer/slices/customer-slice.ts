import { createSlice } from '@reduxjs/toolkit';
import getCustomer from '@use-cases/customer/get-customer';

type CustomerState = {
  customer: Customer | null;
};

const initialState: CustomerState = {
  customer: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, { payload }: { payload: Customer | null }) => {
      state.customer = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, { payload }) => {
      state.customer = payload;
    });
  },
});
export const { setCustomer } = customerSlice.actions;
export default customerSlice;
