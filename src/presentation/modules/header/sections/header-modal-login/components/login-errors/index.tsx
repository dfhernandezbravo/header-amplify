import { Error } from '@entities/errors';
import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import LoginUnauthorized from './errors/unauthorized';

const ErrorsComponents: Record<Error, React.ReactNode> = {
  Unauthorized: <LoginUnauthorized />,
  InternalServerError: <div>Error</div>,
};

const LoginErrors = () => {
  const { error } = useAppSelector((state) => state.login);

  if (!error) return null;

  return <>{ErrorsComponents[error.error]}</>;
};

export default LoginErrors;
