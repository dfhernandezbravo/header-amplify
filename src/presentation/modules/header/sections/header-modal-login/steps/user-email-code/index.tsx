import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputText from '@components/atoms/inputs/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import validateAccessKey from '@use-cases/login/validate-access-key';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ModalForm } from '../../styles';
import { navigateTo } from '@store/login/slices/login-slice';

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
  const dispatch = useAppDispatch();
  const { userEmail } = useAppSelector((state) => state.login);

  const onSubmit: SubmitHandler<ValidateForm> = async (data) => {
    dispatch(validateAccessKey({ userEmail, accessKey: data.accessKey }));
  };

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