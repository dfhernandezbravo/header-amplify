import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import * as yup from 'yup';
import { ModalForm } from '../../styles';
import setPassword from '@use-cases/login/set-password';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from '@components/atoms/inputs/input-text';
import InputPassword from '@components/atoms/inputs/input-password';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { error } from 'console';
import InputCheckbox from '@components/atoms/inputs/input-checkbox';
import Link from 'next/link';

type SetPasswordForm = {
  accessKey: string;
  password: string;
  confirmPassword: string;
  isTYC: boolean;
};

const schema = yup.object({
  accessKey: yup.string().required('Campo requerido'),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      'Su contraseña debe contener: 8 caracteres, números, letras minúsculas y mayúsculas',
    )
    .required('Campo Requerido'),
  confirmPassword: yup
    .string()
    .required('Campo requerido')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  isTYC: yup
    .boolean()
    .oneOf([true], 'Debes aceptar terminos y condiciones')
    .default(false),
});

const LoginSetPassword = () => {
  const { userEmail } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SetPasswordForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      isTYC: false,
    },
  });

  const onSubmit: SubmitHandler<SetPasswordForm> = async (data) => {
    try {
      dispatch(
        setPassword({
          user: userEmail,
          newPassword: data.password,
          accessKey: data.accessKey,
        }),
      );
    } catch (error) {
      console.log(error);
    }
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
