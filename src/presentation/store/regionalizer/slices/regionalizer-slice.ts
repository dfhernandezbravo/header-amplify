import { createSlice } from '@reduxjs/toolkit';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';

type RegionalizerState = {
  regions: RegionalizerRegions | null;
  isOpenModalRegionalizer: boolean;
  addressSelected: AddressShoppingCart | null;
  isLoadingRegionalizer: boolean;
};

const initialState: RegionalizerState = {
  regions: null,
  isOpenModalRegionalizer: false,
  addressSelected: null,
  isLoadingRegionalizer: false,
};

const regionalizerSlice = createSlice({
  name: 'regionalizer',
  initialState,
  reducers: {
    setOpenModalRegionalizer: (state, { payload }: { payload: boolean }) => {
      state.isOpenModalRegionalizer = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => {
        state.isLoadingRegionalizer = true;
      })
      .addCase(addNewAddress.fulfilled, (state, { payload }) => {
        state.isLoadingRegionalizer = false;
        state.addressSelected = payload || null;
        state.isOpenModalRegionalizer = false;
      });
  },
});

export const { setOpenModalRegionalizer } = regionalizerSlice.actions;

export default regionalizerSlice;
