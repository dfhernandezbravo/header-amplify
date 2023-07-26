import InputPassword from '@components/atoms/inputs/input-password';
import InputText from '@components/atoms/inputs/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { ModalForm } from '../../styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import login from '@use-cases/login/login';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import {
  ButtonNewAccount,
  ButtonResetPassword,
  LinkNewAccount,
  NewAccountContainer,
  ResetPasswordContainer,
} from './styles';

type LoginForm = {
  user: string;
  password: string;
};

const schema = yup.object({
  user: yup
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
  const { orderFormId, isShoppingCartUsed: isShoppingCartUse } = useAppSelector(
    (state) => state.shoppingCartHeader,
  );

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const dataForm = isShoppingCartUse ? { ...data, orderFormId } : data;

    dispatch(setEmail(data.user));

    dispatch(login(dataForm));
  };

  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
      <strong>Ingresa con tu usuario y contraseña en Easy.cl</strong>

      <Controller
        name="user"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            {...field}
            label="Ingresa tu correo electrónico"
            placeholder="Ejemplo: correo@mail.com"
            error={Boolean(errors.user)}
            errorMessage={errors.user?.message}
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
          <LinkNewAccount>Crear cuenta </LinkNewAccount>
        </ButtonNewAccount>
      </NewAccountContainer>
    </ModalForm>
  );
};

export default LoginUserPassword;
