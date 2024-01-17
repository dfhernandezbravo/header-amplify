import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputText from '@components/atoms/inputs/input-text';
import { ValidateAccessKeyRequest } from '@entities/login/login.request';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';

type ValidateForm = {
  accessKey: string;
};

const schema = yup.object({
  accessKey: yup.string().required('El correo es requerido'),
});

const LoginUserEmailCode = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ValidateForm>({
    resolver: yupResolver(schema),
  });

  const { userEmail } = useAppSelector((state) => state.login);
  const { getLoginResponse } = useResponseLogin();

  const onSubmit: SubmitHandler<ValidateForm> = async (data) => {
    const dataForm: ValidateAccessKeyRequest = {
      email: userEmail,
      accessKey: data.accessKey,
    };

    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_ACCESS_KEY_VALIDATION,
      detail: dataForm,
    });
  };

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
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
      <span>
        Ingresa la clave de acceso que enviamos al correo:
        <br />
        <strong>{userEmail}</strong>
      </span>

      <Controller
        name="accessKey"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            {...field}
            placeholder="Ejemplo: 000000"
            error={Boolean(errors.accessKey)}
            errorMessage={errors.accessKey?.message}
            type="number"
            ref={null}
          />
        )}
      />

      <ButtonPrimary title="Ingresar" type="submit" />
    </ModalForm>
  );
};

export default LoginUserEmailCode;
