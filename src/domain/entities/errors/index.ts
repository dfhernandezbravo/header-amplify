export type Error = 'Unauthorized' | 'InternalServerError';

export type AppError = {
  error: Error;
  message: string;
};
