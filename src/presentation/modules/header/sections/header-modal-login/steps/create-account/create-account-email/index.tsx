import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import { Container, InputContainer } from './styles';
import { useState } from 'react';
import TextField from '@components/atoms/textfield-bit';
import Button from '@components/atoms/button-bit';

const CreateAccountEmail = () => {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);

  const { createAccountFlow } = useAppSelector((state) => state.login);
  const title =
    createAccountFlow === 'create account'
      ? 'Crear cuenta'
      : 'Recuperar contraseña';
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    if (!isValidEmail) {
      setEmailError(true);
      return;
    }

    dispatch(setEmail(emailValue));
    dispatch(navigateTo('creadAccountUserPassword'));
  };

  return (
    <Container>
      <p className="title">{title}</p>
      <InputContainer>
        <TextField
          fullwidth={true}
          value={emailValue}
          label="Correo electrónico"
          placeholder="Correo electrónico"
          variant={emailError ? 'error' : 'default'}
          helpertext={
            emailError
              ? 'El correo que ingresaste no es válido, intenta de nuevo'
              : ''
          }
          className="input-text"
          onChange={(e) => setEmailValue(e.target.value)}
          onFocus={() => setEmailError(false)}
        />
      </InputContainer>
      <Button
        label="Continuar"
        onClick={() => handleOnClick()}
        disabled={!emailValue}
      />
    </Container>
  );
};

export default CreateAccountEmail;
