import { Customer, CustomerAddress } from '@entities/customer/customer.entity';
import { createSlice } from '@reduxjs/toolkit';
import getAddressCustomer from '@use-cases/customer/get-address-customer';
import getCustomer from '@use-cases/customer/get-customer';

type CustomerState = {
  customer: Customer | null;
  addresses: CustomerAddress[];
  isLoadingCustomer: boolean;
};

const initialState: CustomerState = {
  customer: null,
  isLoadingCustomer: false,
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
      .addCase(getCustomer.pending, (state) => {
        state.isLoadingCustomer = true;
      })
      .addCase(getCustomer.fulfilled, (state, { payload }) => {
        state.customer = payload;
        state.isLoadingCustomer = false;
      })
      .addCase(getAddressCustomer.fulfilled, (state, { payload }) => {
        state.addresses = payload;
      });
  },
});
export const { setCustomer } = customerSlice.actions;
export default customerSlice;
