import React, { useContext } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CreateAccountContext from '../../context/create-account-context';
import InputText from '@components/atoms/inputs/input-text';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';
import { Container, InputContainer } from './styles';

const schema = yup.object({
  email: yup
    .string()
    .required('El correo es requerido')
    .email('El correo que ingresaste no es válido, intenta de nuevo'),
});

type EmailForm = {
  email: string;
};

const CreateAccountEmail = () => {
  const { formValues, handleFormValues } = useContext(CreateAccountContext);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: yupResolver(schema),
  });

  const handleOnClick: SubmitHandler<EmailForm> = (data) => {
    handleFormValues({
      ...formValues,
      email: data.email,
    });
    dispatch(navigateTo('creadAccountUserPassword'));
  };

  return (
    <Container>
      <p className="title">Crear cuenta</p>
      <InputContainer>
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
              className="input-text"
            />
          )}
        />
      </InputContainer>
      <ButtonPrimary title="Continuar" onClick={handleSubmit(handleOnClick)} />
    </Container>
  );
};

export default CreateAccountEmail;
