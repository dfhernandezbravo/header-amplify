import { createSlice } from '@reduxjs/toolkit';

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
    pendingAddNewAddress: (state, { payload }: { payload: boolean }) => {
      state.isLoadingRegionalizer = payload;
    },
    setAddressSelected: (
      state,
      { payload }: { payload: AddressShoppingCart },
    ) => {
      state.addressSelected = payload;
    },
    successAddNewAddress: (
      state,
      { payload }: { payload: AddressShoppingCart },
    ) => {
      state.isLoadingRegionalizer = false;
      state.addressSelected = payload;
      state.isOpenModalRegionalizer = false;
    },
  },
});

export const {
  setOpenModalRegionalizer,
  pendingAddNewAddress,
  successAddNewAddress,
  setAddressSelected,
} = regionalizerSlice.actions;

export default regionalizerSlice;
