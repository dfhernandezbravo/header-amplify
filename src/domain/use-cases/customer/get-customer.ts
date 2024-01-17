import { createAsyncThunk } from '@reduxjs/toolkit';
import customerService from '@services/customer';

const getCustomer = createAsyncThunk('/get/customer', async () => {
  try {
    const { data } = await customerService.getCustomer();
    return data;
  } catch (error) {
    return null;
  }
});

export default getCustomer;
