import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputCheckbox from '@components/atoms/inputs/input-checkbox';
import InputPassword from '@components/atoms/inputs/input-password';
import InputText from '@components/atoms/inputs/input-text';
import { SetPasswordRequest } from '@entities/login/login.request';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';
import userPasswordSchema from './schema-validation';
import { AUTH_EVENTS } from '@infra/events/auth';

type SetPasswordForm = {
  accessKey: string;
  password: string;
  confirmPassword: string;
  isTYC: boolean;
};

const LoginSetPassword = () => {
  const { userEmail } = useAppSelector((state) => state.login);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SetPasswordForm>({
    resolver: yupResolver(userPasswordSchema),
    defaultValues: {
      isTYC: false,
    },
  });

  const { getLoginResponse } = useResponseLogin();

  const onSubmit: SubmitHandler<SetPasswordForm> = async (data) => {
    const dataSetPassword: SetPasswordRequest = {
      email: userEmail,
      newPassword: data.password,
      accessKey: data.accessKey,
    };

    customDispatchEvent({
      name: AUTH_EVENTS.DISPATCH_SET_PASSWORD,
      detail: dataSetPassword,
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
      <strong>
        Ingresa el código de verificación que enviamos a
        <br />
        {userEmail}
      </strong>

      <Controller
        name="accessKey"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            {...field}
            label=""
            placeholder="Ejemplo: 000000"
            error={Boolean(errors.accessKey)}
            errorMessage={errors.accessKey?.message}
            ref={null}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputPassword
            {...field}
            label="Ingresa tu nueva contraseña"
            placeholder="********"
            error={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            ref={null}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputPassword
            {...field}
            label="Repite tu nueva contraseña"
            placeholder="********"
            error={Boolean(errors.confirmPassword)}
            errorMessage={errors.confirmPassword?.message}
            ref={null}
          />
        )}
      />

      <Controller
        name="isTYC"
        control={control}
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <InputCheckbox
            onChange={onChange}
            checked={value}
            label={
              <Link
                href="https://www.easy.cl/terminos-y-condiciones"
                target="_blank"
              >
                Acepto términos y condiciones*
              </Link>
            }
            error={Boolean(errors.isTYC)}
            errorMessage={errors.isTYC?.message}
          />
        )}
      />
      <ButtonPrimary type="submit" title="Crear Cuenta" />
    </ModalForm>
  );
};

export default LoginSetPassword;
