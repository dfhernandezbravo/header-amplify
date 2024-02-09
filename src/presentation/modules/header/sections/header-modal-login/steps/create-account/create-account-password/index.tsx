import React, { ChangeEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import inputValidator from './hooks/inputValidator';
import RequirePassword from './components/require-password';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setPassword } from '@store/login/slices/login-slice';
import { PasswordFormat, passwordFormat } from './types';
import { ConditionContainer, Container, InputContainer } from './styles';
import TextField from '@components/atoms/textfield-bit';
import Button from '@components/atoms/button-bit';
import CheckBox from '@components/atoms/checkbox-bit';

const CreateAccountUserPassword = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
  const [errorSamePassword, setErrorSamePassword] = useState(false);
  const [validateInput, setValidateInput] =
    useState<PasswordFormat>(passwordFormat);
  const [termAndConditionAccepted, setTermAndConditionAccepted] =
    useState(false);
  const [showInputTexts, setShowInputTexts] = useState({
    password: false,
    passwordRepeated: false,
  });

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    setErrorSamePassword(false);
    if (passwordInput !== passwordRepeated) {
      setErrorSamePassword(true);
      return;
    }
    dispatch(setPassword(passwordInput));
    dispatch(navigateTo('sendUserCode'));
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checkInputFormat = inputValidator(value, validateInput);
    setPasswordInput(value);
    setValidateInput(checkInputFormat);
  };

  const isValidInput = useMemo(() => {
    const allValueValid = Object.values(validateInput).every(
      (input) => input.isValid,
    );
    return allValueValid;
  }, [validateInput]);

  const ShowPassword = ({
    target,
  }: {
    target: 'passwordRepeated' | 'password';
  }) => {
    return (
      <p
        className="show-hide-input"
        onClick={() =>
          setShowInputTexts({
            ...showInputTexts,
            [target]: !showInputTexts[target],
          })
        }
      >
        {showInputTexts.passwordRepeated ? 'Esconder' : 'Mostrar'}
      </p>
    );
  };

  return (
    <Container>
      <p className="title"> Crear contraseña</p>
      <InputContainer>
        <TextField
          value={passwordInput}
          className="input"
          fullwidth={true}
          placeholder="Contraseña"
          label="Contraseña"
          type={showInputTexts.password ? 'text' : 'password'}
          onChange={handlePassword}
        />
        <ShowPassword target="password" />
      </InputContainer>

      <InputContainer>
        <TextField
          value={passwordRepeated}
          className="input"
          fullwidth={true}
          placeholder="Repetir contraseña"
          label="Repetir contraseña"
          type={showInputTexts.passwordRepeated ? 'text' : 'password'}
          onChange={(event) => setPasswordRepeated(event.target.value)}
          variant={errorSamePassword ? 'error' : 'default'}
          helpertext={errorSamePassword ? 'La contraseña no coincide' : ''}
          onFocus={() => {
            setErrorSamePassword(false);
          }}
        />
        <ShowPassword target="passwordRepeated" />
      </InputContainer>

      {!isValidInput && <RequirePassword validator={validateInput} />}

      <ConditionContainer>
        <CheckBox
          checked={termAndConditionAccepted}
          onChange={(event) => {
            setTermAndConditionAccepted(event.target.checked);
          }}
        />
        <p className="term-and-condition">
          acepto los{' '}
          <Link
            className="link"
            href={'https://www.easy.cl/terminos-y-condiciones'}
          >
            Terminos y condiciones
          </Link>
        </p>
      </ConditionContainer>
      <Button
        label="Continuar"
        fullwidth={true}
        disabled={!isValidInput || !termAndConditionAccepted}
        onClick={() => handleOnClick()}
      />
    </Container>
  );
};

export default CreateAccountUserPassword;
