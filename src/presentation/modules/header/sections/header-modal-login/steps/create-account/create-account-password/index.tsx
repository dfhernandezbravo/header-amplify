import React, { ChangeEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import inputValidator from './hooks/inputValidator';
import RequirePassword from './components/require-password';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setPassword } from '@store/login/slices/login-slice';
import { PasswordFormat, passwordFormat } from './types';
import { ConditionContainer, Container, InputContainer } from './styles';
import InputText from '@components/atoms/inputs/input-text';
import InputCheckbox from '@components/atoms/inputs/input-checkbox';

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

  return (
    <Container>
      <p className="title"> Crear contraseña</p>
      <InputContainer>
        <InputText
          className="input"
          placeholder="Contraseña"
          type={showInputTexts.password ? 'text' : 'password'}
          value={passwordInput}
          onChange={handlePassword}
        />
        <p
          className="show-hide-input"
          onClick={() =>
            setShowInputTexts({
              ...showInputTexts,
              password: !showInputTexts.password,
            })
          }
        >
          {showInputTexts.password ? 'Esconder' : 'Mostrar'}
        </p>
      </InputContainer>
      <InputContainer>
        <InputText
          className="input"
          placeholder="Repetir contraseña"
          type={showInputTexts.passwordRepeated ? 'text' : 'password'}
          value={passwordRepeated}
          onChange={(event) => setPasswordRepeated(event.target.value)}
        />
        {errorSamePassword && (
          <p className="password-not-same">La contraseña no coincide</p>
        )}
        <p
          className="show-hide-input"
          onClick={() =>
            setShowInputTexts({
              ...showInputTexts,
              passwordRepeated: !showInputTexts.passwordRepeated,
            })
          }
        >
          {showInputTexts.passwordRepeated ? 'Esconder' : 'Mostrar'}
        </p>
      </InputContainer>
      {!isValidInput && <RequirePassword validator={validateInput} />}
      <ConditionContainer>
        <InputCheckbox
          checked={termAndConditionAccepted}
          onChange={(event) =>
            setTermAndConditionAccepted(event.target.checked)
          }
          label=""
        />
        {/* <input
          className="checkbox"
          type="checkbox"
          onChange={(event) =>
            setTermAndConditionAccepted(event.target.checked)
          }
        /> */}
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
      <ButtonPrimary
        title="Continuar"
        disabled={!isValidInput || !termAndConditionAccepted}
        onClick={() => {
          handleOnClick();
        }}
      />
    </Container>
  );
};

export default CreateAccountUserPassword;
