import { GenerateTokenRequest } from '@entities/login/login.request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '@services/login';

const generateToken = createAsyncThunk(
  'login/generate-token',
  async (dataRequest: GenerateTokenRequest) => {
    try {
      const { data } = await loginService.generateToken(dataRequest);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
);

export default generateToken;
