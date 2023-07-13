import { AppError } from '@entities/errors';
import { createSlice } from '@reduxjs/toolkit';

type ErrorState = {
  isError: boolean;
  error: AppError | null;
};

const initialState: ErrorState = {
  isError: false,
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, { payload }: { payload: AppError | null }) => {
      state.isError = false;
      state.error = payload;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice;
