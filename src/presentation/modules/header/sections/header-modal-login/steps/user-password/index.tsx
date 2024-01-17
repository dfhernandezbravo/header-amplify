import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputPassword from '@components/atoms/inputs/input-password';
import InputText from '@components/atoms/inputs/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';
import {
  ButtonNewAccount,
  ButtonResetPassword,
  LinkNewAccount,
  NewAccountContainer,
  ResetPasswordContainer,
} from './styles';
import { AUTH_EVENTS } from '@infra/events/auth';

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required('El correo es requerido')
    .email('El correo que ingresaste no es válido, intenta de nuevo'),
  password: yup.string().required('La Contraseña es requerida'),
});

const LoginUserPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const { getLoginResponse } = useResponseLogin();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    dispatch(setEmail(data.email));

    customDispatchEvent({ name: AUTH_EVENTS.DISPATCH_SIGNIN, detail: data });
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
      <strong>Ingresa con tu usuario y contraseña en Easy.cl</strong>

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            {...field}
            label="Ingresa tu correo electrónico"
            placeholder="Ejemplo: correo@mail.com"
            error={Boolean(errors.email)}
            errorMessage={errors.email?.message}
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
            label="Ingresa tu contraseña"
            placeholder="********"
            error={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            ref={null}
          />
        )}
      />

      <ResetPasswordContainer>
        <ButtonResetPassword
          type="button"
          onClick={() => dispatch(navigateTo('EmailSetPassword'))}
        >
          ¿Olvidaste tu contraseña?
        </ButtonResetPassword>
      </ResetPasswordContainer>

      <ButtonPrimary type="submit" title="Ingresar a mi cuenta" />

      <NewAccountContainer>
        <ButtonNewAccount
          onClick={() => dispatch(navigateTo('EmailSetPassword'))}
        >
          <span>¿No estás registrado?</span>
          <LinkNewAccount>Crear cuenta</LinkNewAccount>
        </ButtonNewAccount>
      </NewAccountContainer>
    </ModalForm>
  );
};

export default LoginUserPassword;
