import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';
import generateAccessKey from '@use-cases/login/generate-access-key';
import { Container } from './styles';

const SendUserCode = () => {
  const { userEmail } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  const handleOnClick = async () => {
    try {
      await generateAccessKey({ email: userEmail });
      dispatch(navigateTo('EmailCode'));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Container>
      <div className="header">
        <p>
          Para confirmar tu identidad vamos a enviar un código de verificación a
        </p>
        {/* <strong>{formValues.email}</strong> */}
        <strong>jose.martinez.mayora@gmail.com</strong>
      </div>
      <ButtonPrimary
        title="Enviar código"
        onClick={() => {
          handleOnClick();
        }}
      />
    </Container>
  );
};

export default SendUserCode;
