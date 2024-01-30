import { useEffect, useState, useRef } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
// import { ValidateAccessKeyRequest } from '@entities/login/login.request';
import { useAppSelector } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';

const LoginUserEmailCode = () => {
  const [inputsBox, setinputsBox] = useState<string[]>(new Array(6).fill(''));
  const [activeInputBox, setActiveInputBox] = useState(0);
  const { userEmail } = useAppSelector((state) => state.login);
  const { getLoginResponse } = useResponseLogin();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    // const dataForm: ValidateAccessKeyRequest = {
    //   email: userEmail,
    //   accessKey: data.accessKey,
    // };
    // customDispatchEvent({
    //   name: AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
    //   detail: dataForm,
    // });
    // };
  };

  const handleForm = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const inputValue = event.target.value;

    const newInputs = [...inputsBox];

    newInputs[index] = inputValue.substring(inputValue.length - 1);

    if (!inputValue) {
      setActiveInputBox(index - 1);
    } else {
      setActiveInputBox(index + 1);
    }
    setinputsBox(newInputs);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [activeInputBox]);

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_SUCCESS, getLoginResponse);

    return () => {
      document.removeEventListener(
        AUTH_EVENTS.GET_SIGNUP_SUCCESS,
        getLoginResponse,
      );
    };
  }, []);

  return (
    <ModalForm onSubmit={() => onSubmit()}>
      <span className="info-text">
        Revisa tu correo electrónico
        <br />
        <strong>{userEmail},</strong>
        <br />
        Te hemos enviamos un código de acceso
      </span>
      {inputsBox.map((_, index) => {
        return (
          <>
            <input
              ref={index === activeInputBox ? inputRef : null}
              key={index}
              type="number"
              value={inputsBox[index]}
              className="input-text"
              onChange={(e) => handleForm(e, index)}
            />
          </>
        );
      })}
      <ButtonPrimary title="Ingresar" type="submit" />
    </ModalForm>
  );
};

export default LoginUserEmailCode;
