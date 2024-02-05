import React, { ChangeEvent, useMemo, useState } from 'react';
import inputValidator from './hooks/inputValidator';
import RequirePassword from './components/require-password';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setPassword } from '@store/login/slices/login-slice';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { PasswordFormat, passwordFormat } from './types';
import { ConditionContainer, Container, InputContainer } from './styles';

const TextField = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.textfield').then(
      (module) => module.Textfield,
    ),
  { ssr: false },
);

const CreateAccountUserPassword = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
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
    if (passwordInput !== passwordRepeated) {
      console.log('Las contraseñas no coinciden');
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
        <TextField
          className="input"
          label="Contraseña"
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
        <TextField
          className="input"
          label="Repetir contraseña"
          type={showInputTexts.passwordRepeated ? 'text' : 'password'}
          value={passwordRepeated}
          onChange={(event) => setPasswordRepeated(event.target.value)}
        />
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
        <input
          className="checkbox"
          type="checkbox"
          onChange={(event) =>
            setTermAndConditionAccepted(event.target.checked)
          }
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
