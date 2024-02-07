import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { navigateTo } from '@store/login/slices/login-slice';
import generateAccessKey from '@use-cases/login/generate-access-key';
import { Container } from './styles';
import Button from '@components/atoms/button-bit';

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
        <strong>{userEmail}</strong>
      </div>
      <Button
        label="Enviar código"
        fullwidth={true}
        onClick={() => {
          handleOnClick();
        }}
      />
    </Container>
  );
};

export default SendUserCode;
