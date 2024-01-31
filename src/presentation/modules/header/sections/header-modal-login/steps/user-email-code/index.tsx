import { useEffect, useState, useRef } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { ValidateAccessKeyRequest } from '@entities/login/login.request';
import { useAppSelector } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import useResponseLogin from '../../hooks/use-response-login';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import generateAccessKey from '@use-cases/login/generate-access-key';
import { Container, InputContainer } from './styles';
import { setError } from '@store/error/slices/error-slice';
import fotmatCountDown from '@modules/header/sections/header-modal-login/hooks/format-countdown';
import ErrorMessage from '@components/atoms/error-message';

let currentIndex = 0;
const LoginUserEmailCode = () => {
  const [countdown, setCountdown] = useState(5);
  const [inputsBox, setinputsBox] = useState<string[]>(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [activeInputBox, setActiveInputBox] = useState(0);
  const { userEmail } = useAppSelector((state) => state.login);
  const inputRef = useRef<HTMLInputElement>(null);
  const { error } = useAppSelector((state) => state.error);

  const { getLoginResponse } = useResponseLogin();

  const onSubmit = async () => {
    const dataForm: ValidateAccessKeyRequest = {
      email: userEmail,
      accessKey: inputsBox.join(''),
    };
    setLoading(true);
    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
      detail: dataForm,
    });
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
    setError(null);
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
      getLoginResponse(event);
    });

    return () => {
      document.removeEventListener(
        AUTH_EVENTS.GET_SIGNUP_SUCCESS,
        getLoginResponse,
      );
    };
  }, []);

  return (
    <Container onSubmit={() => onSubmit()}>
      <span className="info-text">
        Revisa tu correo electrónico
        <br />
        <strong>{userEmail},</strong>
        <br />
        Te hemos enviamos un código de acceso
      </span>
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
      {error && (
        <ErrorMessage message="El código es incorrecto. Por favor, vuelve a intentarlo" />
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
