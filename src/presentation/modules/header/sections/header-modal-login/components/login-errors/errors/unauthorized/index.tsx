import React from 'react';
import { LoginUnauthorizedcontainer, TextDescription } from './styles';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const LoginUnauthorized = () => {
  return (
    <LoginUnauthorizedcontainer>
      <AiOutlineExclamationCircle color="#B81A14" size={24} />
      <div>
        <TextDescription>
          <strong>Datos Incorrectos</strong>
        </TextDescription>
        <TextDescription>
          El correo o contraseña son incorrectos. Por favor, vuelve a intentar.
        </TextDescription>
      </div>
    </LoginUnauthorizedcontainer>
  );
};

export default LoginUnauthorized;
