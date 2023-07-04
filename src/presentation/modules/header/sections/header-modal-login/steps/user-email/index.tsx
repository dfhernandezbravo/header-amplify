import ButtonPrimary from '@components/atoms/buttons/button-primary';
import InputText from '@components/atoms/inputs/input-text';
import { LoginStep } from '@entities/login/login.entity';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import generateAccessKey from '@use-cases/login/generate-access-key';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ModalForm } from '../../styles';

interface Props {
  nextStep: keyof LoginStep;
}

type EmailForm = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required('El correo es requerido')
    .email('El correo que ingresaste no es válido, intenta de nuevo'),
});

const LoginUserEmail = ({ nextStep }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<EmailForm> = async (data) => {
    try {
      await generateAccessKey({ userEmail: data.email });
      dispatch(setEmail(data.email));
      dispatch(navigateTo(nextStep));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
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

      <ButtonPrimary title="Continuar" type="submit" />
    </ModalForm>
  );
};

export default LoginUserEmail;
