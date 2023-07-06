import { createAsyncThunk } from '@reduxjs/toolkit';
import customerService from '@services/customer';

const getCustomer = createAsyncThunk('/get/customer', async (email: string) => {
  try {
    const { data } = await customerService.getCustomer(email);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export default getCustomer;
