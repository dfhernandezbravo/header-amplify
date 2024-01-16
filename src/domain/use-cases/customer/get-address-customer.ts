import { createAsyncThunk } from '@reduxjs/toolkit';
import customerService from '@services/customer';

const getAddressCustomer = createAsyncThunk('/customer/address', async () => {
  try {
    const { data } = await customerService.getAddressCustomer();
    return data;
  } catch (error) {
    return [];
  }
});

export default getAddressCustomer;
