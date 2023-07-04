import { GenerateAccessKeyRequest } from '@entities/login/login.request';
import loginService from '@services/login';

const generateAccessKey = async (dataRequest: GenerateAccessKeyRequest) => {
  try {
    await loginService.generateAccessKey(dataRequest);
  } catch (error) {
    console.log(error);
  }
};

export default generateAccessKey;
