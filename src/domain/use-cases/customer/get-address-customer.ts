import { createAsyncThunk } from '@reduxjs/toolkit';
import customerService from '@services/customer';

const getAddressCustomer = createAsyncThunk(
  '/customer/address',
  async (email: string) => {
    try {
      const { data } = await customerService.getAddressCustomer(email);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
);

export default getAddressCustomer;
