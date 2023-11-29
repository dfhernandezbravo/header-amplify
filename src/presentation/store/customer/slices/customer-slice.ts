import { Customer, CustomerAddress } from '@entities/customer/customer.entity';
import { createSlice } from '@reduxjs/toolkit';
import getAddressCustomer from '@use-cases/customer/get-address-customer';
import getCustomer from '@use-cases/customer/get-customer';

type CustomerState = {
  customer: Customer | null;
  addresses: CustomerAddress[];
};

const initialState: CustomerState = {
  customer: null,
  addresses: [],
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
    builder
      .addCase(getCustomer.fulfilled, (state, { payload }) => {
        console.log('customer', { payload });
        state.customer = payload;
      })
      .addCase(getAddressCustomer.fulfilled, (state, { payload }) => {
        state.addresses = payload;
      });
  },
});
export const { setCustomer } = customerSlice.actions;
export default customerSlice;
