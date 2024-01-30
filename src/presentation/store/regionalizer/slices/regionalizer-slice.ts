import { Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { createSlice } from '@reduxjs/toolkit';

type RegionalizerState = {
  regions: Regions | null;
  isOpenModalRegionalizer: boolean;
  addressSelected: AddressShoppingCart | null;
  isLoadingRegionalizer: boolean;
  errorSetLocation: boolean;
};

const initialState: RegionalizerState = {
  regions: null,
  isOpenModalRegionalizer: false,
  addressSelected: null,
  isLoadingRegionalizer: false,
  errorSetLocation: false,
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
    setErrorSetLocation: (state, { payload }: { payload: boolean }) => {
      state.errorSetLocation = payload;
    },
  },
});

export const {
  setOpenModalRegionalizer,
  pendingAddNewAddress,
  successAddNewAddress,
  setAddressSelected,
  setErrorSetLocation,
} = regionalizerSlice.actions;

export default regionalizerSlice;
