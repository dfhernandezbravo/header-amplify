import { useAppSelector } from '@hooks/storeHooks';
import { Container } from './styles';

const EmailCodeHeader = () => {
  const { userEmail } = useAppSelector((state) => state.login);

  return (
    <Container>
      Revisa tu correo electrónico
      <br />
      <strong>{userEmail},</strong>
      <br />
      Te hemos enviamos un código de acceso
    </Container>
  );
};
export default EmailCodeHeader;
