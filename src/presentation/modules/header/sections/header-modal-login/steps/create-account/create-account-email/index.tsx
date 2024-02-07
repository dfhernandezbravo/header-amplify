import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputText from '@components/atoms/inputs/input-text';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import { Container, InputContainer } from './styles';
// import dynamic from 'next/dynamic';

const schema = yup.object({
  email: yup
    .string()
    .required('El correo es requerido')
    .email('El correo que ingresaste no es válido, intenta de nuevo'),
});

type EmailForm = {
  email: string;
};

// const TextField = dynamic(
//   () =>
//     import("@ccom-easy-design-system/atoms.textfield").then(
//       (module) => module.Textfield
//     ),
//   { ssr: false, loading: () => <></> }
// );

const CreateAccountEmail = () => {
  const { createAccountFlow } = useAppSelector((state) => state.login);
  const title =
    createAccountFlow === 'create account'
      ? 'Crear cuenta'
      : 'Recuperar contraseña';
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: yupResolver(schema),
  });

  const emailValue = watch('email');

  const handleOnClick: SubmitHandler<EmailForm> = (data) => {
    dispatch(setEmail(data.email));
    dispatch(navigateTo('creadAccountUserPassword'));
  };

  return (
    <Container>
      <p className="title">{title}</p>
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
      <ButtonPrimary
        title="Continuar"
        onClick={handleSubmit(handleOnClick)}
        disabled={!emailValue}
      />
    </Container>
  );
};

export default CreateAccountEmail;
