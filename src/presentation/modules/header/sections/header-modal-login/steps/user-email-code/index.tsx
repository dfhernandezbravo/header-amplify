/* eslint-disable max-lines */
import { useEffect, useState, useRef } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import {
  SignUpRequest,
  ValidateAccessKeyRequest,
} from '@entities/login/login.request';
import { useAppSelector } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import useResponseLogin from '../../hooks/use-response-login';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import generateAccessKey from '@use-cases/login/generate-access-key';
import { Container, InputContainer } from './styles';
import fotmatCountDown from '@modules/header/sections/header-modal-login/hooks/format-countdown';
import ErrorMessage from '@components/atoms/error-message';
import { AxiosError } from 'axios';
import EmailCodeHeader from './component/header';

enum ErrorType {
  USER,
  CODE,
}
interface ErrorData {
  errorCode?: string;
  message?: string;
}

let currentIndex = 0;
const LoginUserEmailCode = () => {
  const [countdown, setCountdown] = useState(120);
  const [inputsBox, setinputsBox] = useState<string[]>(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [activeInputBox, setActiveInputBox] = useState(0);
  const [errorCode, setErrorCode] = useState<ErrorType | undefined>();
  const { userEmail, createAccountFlow, userPassword } = useAppSelector(
    (state) => state.login,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const { loginSuccess } = useResponseLogin();

  function createAccount() {
    const dataForm: SignUpRequest = {
      email: userEmail,
      accessKey: inputsBox.join(''),
      password: userPassword,
    };
    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_SIGNUP,
      detail: dataForm,
    });
  }

  function validateAccessKey() {
    const dataForm: ValidateAccessKeyRequest = {
      email: userEmail,
      accessKey: inputsBox.join(''),
    };
    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
      detail: dataForm,
    });
  }

  function forgotPassword() {
    const dataForm = {
      email: userEmail,
      accessKey: inputsBox.join(''),
      newPassword: userPassword,
    };
    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_SET_PASSWORD,
      detail: dataForm,
    });
  }

  const onSubmit = async () => {
    setLoading(true);

    switch (createAccountFlow) {
      case 'create account':
        createAccount();
        break;
      case 'forgot password':
        forgotPassword();
        break;
      default:
        validateAccessKey();
        break;
    }
  };

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputs = [...inputsBox];
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      const inputIterator = inputValue.split('').entries();
      let lastIndex = currentIndex;
      for (const [currentIndex, value] of inputIterator) {
        if (currentIndex === 6) break;
        lastIndex = currentIndex;
        newInputs[currentIndex] = value;
      }
      setActiveInputBox(lastIndex === 5 ? lastIndex : lastIndex + 1);
      setinputsBox(newInputs);
      return;
    }

    newInputs[currentIndex] = inputValue.substring(inputValue.length - 1);

    if (!inputValue) {
      setActiveInputBox(currentIndex - 1);
    } else {
      setActiveInputBox(currentIndex + 1);
    }
    setinputsBox(newInputs);
  };

  const resendAccessKey = () => {
    generateAccessKey({ email: userEmail });
    setCountdown(120);
    setErrorCode(undefined);
    setinputsBox(new Array(6).fill(''));
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    currentIndex = index;
    if (key === 'Backspace') {
      setActiveInputBox(currentIndex - 1);
    }
  };

  const handleError = (event: Event) => {
    const customEvent = event as CustomEvent<{
      error: AxiosError;
    }>;
    const {
      detail: {
        error: { response },
      },
    } = customEvent;
    const data = response?.data as ErrorData;
    setLoading(false);
    if (response?.status === 400 && data.errorCode === 'MSSSM0003') {
      setErrorCode(ErrorType.USER);
    } else {
      setErrorCode(ErrorType.CODE);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0,
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [activeInputBox]);

  useEffect(() => {
    if (inputsBox.every((item) => item !== '')) {
      onSubmit();
    }
  }, [inputsBox]);

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_SUCCESS, (event) => {
      setLoading(false);
      loginSuccess(event);
    });
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, handleError);
    document.addEventListener(
      AUTH_EVENTS.GET_CREATE_ACCOUNT_ERROR,
      handleError,
    );

    return () => {
      document.removeEventListener(
        AUTH_EVENTS.GET_SIGNUP_SUCCESS,
        loginSuccess,
      );
      document.removeEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, handleError);
    };
  }, []);

  return (
    <Container onSubmit={() => onSubmit()}>
      <EmailCodeHeader />
      <InputContainer>
        {inputsBox.map((_, index) => {
          return (
            <>
              <input
                ref={index === activeInputBox ? inputRef : null}
                key={index}
                type="number"
                value={inputsBox[index]}
                className="input-text"
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                onChange={(e) => handleForm(e)}
              />
            </>
          );
        })}
      </InputContainer>
      {errorCode === ErrorType.CODE && (
        <ErrorMessage message="El código es incorrecto. Por favor, vuelve a intentarlo" />
      )}
      {errorCode === ErrorType.USER && (
        <ErrorMessage message="Ha ocurrido un error. El email ingresado ya existe o es inválido." />
      )}
      <ButtonPrimary
        title={`Reenviar código   ${
          countdown > 0 ? `en ${fotmatCountDown(countdown)}` : ''
        }`}
        isLoading={loading}
        disabled={countdown > 0 || loading}
        onClick={() => resendAccessKey()}
      />
    </Container>
  );
};
export default LoginUserEmailCode;
