import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';

import { ModalForm } from '../../styles';
import setPassword from '@use-cases/login/set-password';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from '@components/atoms/inputs/input-text';
import InputPassword from '@components/atoms/inputs/input-password';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputCheckbox from '@components/atoms/inputs/input-checkbox';
import Link from 'next/link';
import { SetPasswordRequest } from '@entities/login/login.request';
import userPasswordSchema from './schema-validation';

type SetPasswordForm = {
  accessKey: string;
  password: string;
  confirmPassword: string;
  isTYC: boolean;
};

const LoginSetPassword = () => {
  const { orderFormId, isShoppingCartUsed: isShoppingCartUse } = useAppSelector(
    (state) => state.shoppingCartHeader,
  );
  const { userEmail } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

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

  const onSubmit: SubmitHandler<SetPasswordForm> = async (data) => {
    const dataSetPassword: SetPasswordRequest = {
      user: userEmail,
      newPassword: data.password,
      accessKey: data.accessKey,
    };

    const dataSend = isShoppingCartUse
      ? { ...dataSetPassword, orderFormId }
      : dataSetPassword;

    dispatch(setPassword(dataSend));
  };

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
