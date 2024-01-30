import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputPassword from '@components/atoms/inputs/input-password';
import InputText from '@components/atoms/inputs/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import {
  navigateTo,
  setEmail,
  setLoginError,
} from '@store/login/slices/login-slice';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import LoginErrors from '../../components/login-errors';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';
import { ButtonResetPassword, ResetPasswordContainer } from './styles';

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
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const { loginSuccess, loginError } = useResponseLogin();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    dispatch(setLoginError(null));
    dispatch(setEmail(data.email));

    customDispatchEvent({ name: AUTH_EVENTS.DISPATCH_SIGNIN, detail: data });
  };

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_SUCCESS, loginSuccess);
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, loginError);

    return () => {
      document.removeEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, loginSuccess);
      document.removeEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, loginError);
    };
  }, []);

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  useEffect(() => {
    dispatch(setLoginError(null));
  }, []);

  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
      <LoginErrors />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            {...field}
            placeholder="Correo electrónico"
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
            placeholder="Contraseña"
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
      <ButtonPrimary
        type="submit"
        title="Ingresar a mi cuenta"
        disabled={!watchEmail || !watchPassword}
      />
    </ModalForm>
  );
};

export default LoginUserPassword;
