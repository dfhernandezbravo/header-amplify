import { useState } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import TextField from '@components/atoms/textfield-bit';
import { LoginStep } from '@entities/login/login.entity';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/storeHooks';
import { navigateTo, setEmail } from '@store/login/slices/login-slice';
import generateAccessKey from '@use-cases/login/generate-access-key';
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
  const [buttonLoading, setButtonLoading] = useState(false);

  const onSubmit: SubmitHandler<EmailForm> = async (data) => {
    setButtonLoading(true);
    try {
      dispatch(setEmail(data.email));
      await generateAccessKey(data);
      setButtonLoading(false);
      dispatch(navigateTo(nextStep));
    } catch (error) {
      setButtonLoading(false);
      throw new Error('Oh no!!');
    }
  };

  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            fullwidth={true}
            label="Correo electrónico"
            placeholder="Correo electrónico"
            variant={errors.email ? 'error' : 'default'}
            helpertext={errors.email ? errors.email.message : ''}
            ref={null}
            className="input-text"
          />
        )}
      />
      <p className="text">
        Te enviaremos el <strong>código de acceso</strong> a tu correo
        electrónico
      </p>

      <ButtonPrimary
        title={buttonLoading ? '' : 'Continuar'}
        type="submit"
        isLoading={buttonLoading}
        disabled={buttonLoading}
      />
    </ModalForm>
  );
};

export default LoginUserEmail;
