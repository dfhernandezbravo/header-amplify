import { AppError } from '@entities/errors';
import { AxiosResponse } from 'axios';

const handleHttpError = (error: AxiosResponse): AppError => {
  switch (error.status) {
    case 401:
      return {
        error: 'Unauthorized',
        message: 'Credenciales incorrectas',
      };

    default:
      return {
        error: 'InternalServerError',
        message: 'Se ha presentado algun error, intenta más tarde',
      };
  }
};

export default handleHttpError;
