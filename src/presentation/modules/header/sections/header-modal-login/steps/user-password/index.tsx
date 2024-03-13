import { useState, useEffect } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import TextField from '@components/atoms/textfield-bit';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { AUTH_EVENTS } from '@infra/events/auth';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import {
  navigateTo,
  setCreateAccountFlow,
  setEmail,
  setLoginError,
} from '@store/login/slices/login-slice';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import LoginErrors from '../../components/login-errors';
import useResponseLogin from '../../hooks/use-response-login';
import { ModalForm } from '../../styles';
import {
  ButtonResetPassword,
  ResetPasswordContainer,
  TexFieldContainer,
} from './styles';

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

  const [buttonLoading, setButtonLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const { loginSuccess, loginError } = useResponseLogin();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setButtonLoading(true);
    dispatch(setLoginError(null));
    dispatch(setEmail(data.email));
    customDispatchEvent({ name: AUTH_EVENTS.DISPATCH_SIGNIN, detail: data });
  };

  useEffect(() => {
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_SUCCESS, (event) => {
      setButtonLoading(false);
      loginSuccess(event);
    });
    document.addEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, (event) => {
      setButtonLoading(false);
      loginError(event);
    });

    return () => {
      document.removeEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, loginSuccess);
      document.removeEventListener(AUTH_EVENTS.GET_SIGNUP_ERROR, loginError);
    };
  }, []);

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  const handleForgotPassword = () => {
    dispatch(navigateTo('createAccountEmail'));
    dispatch(setCreateAccountFlow('forgot password'));
  };

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
          <TextField
            {...field}
            fullwidth={true}
            label="Correo electrónico"
            variant={errors.email ? 'error' : 'default'}
            helpertext={errors.email ? errors.email.message : ''}
            ref={null}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TexFieldContainer>
            <TextField
              {...field}
              fullwidth={true}
              label="Contraseña"
              type={!showPassword ? 'password' : 'text'}
              ref={null}
            />
            <p
              className="show-hide-text"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? 'Mostrar' : 'Ocultar'}
            </p>
          </TexFieldContainer>
        )}
      />

      <ResetPasswordContainer>
        <ButtonResetPassword
          type="button"
          onClick={() => handleForgotPassword()}
        >
          ¿Olvidaste tu contraseña?
        </ButtonResetPassword>
      </ResetPasswordContainer>

      <ButtonPrimary
        type="submit"
        title={buttonLoading ? '' : 'Ingresar a mi cuenta'}
        disabled={!watchEmail || !watchPassword || buttonLoading}
        isLoading={buttonLoading}
      />
    </ModalForm>
  );
};

export default LoginUserPassword;
