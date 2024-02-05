import React, { ChangeEvent, useMemo, useState, useContext } from 'react';
import CreateAccounContextState from '../../context/create-account-context';
import inputValidator from './hooks/inputValidator';
import RequirePassword from './components/require-password';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';
// import dynamic from 'next/dynamic's
import { Container } from './styles';
import Link from 'next/link';

export type PasswordFormat = {
  hasLowercase: {
    text: string;
    isValid: boolean;
  };
  hasUppercase: {
    text: string;
    isValid: boolean;
  };
  hasMinLength: {
    text: string;
    isValid: boolean;
  };
  hasNumber: {
    text: string;
    isValid: boolean;
  };
};

export const passwordFormat: PasswordFormat = {
  hasLowercase: {
    text: 'Contiene minúsculas',
    isValid: false,
  },
  hasUppercase: {
    text: 'Contiene mayúsculas',
    isValid: false,
  },
  hasMinLength: {
    text: 'Mínimo 8 caracteres',
    isValid: false,
  },
  hasNumber: {
    text: 'Contiene números',
    isValid: false,
  },
};

//   const TextField = dynamic(
//   () =>
//     import("@ccom-easy-design-system/atoms.textfield").then(
//       (module) => module.Textfield
//     ),
//   { ssr: false }
// );

const CreateAccountUserPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
  const [validateInput, setValidateInput] =
    useState<PasswordFormat>(passwordFormat);
  const { formValues, handleFormValues } = useContext(CreateAccounContextState);
  const [termAndConditionAccepted, setTermAndConditionAccepted] =
    useState(false);

  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    if (password !== passwordRepeated) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    handleFormValues({
      ...formValues,
      password,
    });
    dispatch(navigateTo('sendUserCode'));
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checkInputFormat = inputValidator(value, validateInput);
    setPassword(value);
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
      <input type="password" value={password} onChange={handlePassword} />
      <input
        type="password"
        value={passwordRepeated}
        onChange={(event) => setPasswordRepeated(event.target.value)}
      />
      {!isValidInput && <RequirePassword validator={validateInput} />}
      <div>
        <input
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
      </div>
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
