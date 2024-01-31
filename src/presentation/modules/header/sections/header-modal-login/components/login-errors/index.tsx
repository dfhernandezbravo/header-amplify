import { Error } from '@entities/errors';
import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import ErrorMessageTooltip from '@components/atoms/error-message-tooltip';

const ErrorsComponents: Record<Error, React.ReactNode> = {
  Unauthorized: (
    <ErrorMessageTooltip
      title="Datos Incorrectos"
      description="El correo o contraseña son incorrectos. Por favor, vuelve a intentar."
    />
  ),
  InternalServerError: <div>Error</div>,
};

const LoginErrors = () => {
  const { error } = useAppSelector((state) => state.login);

  if (!error) return null;

  return <>{ErrorsComponents[error.error]}</>;
};

export default LoginErrors;
