import LoginUserPassword from '../user-password';
import { InnerContainer, MethodsContainer } from './styles';

const LoginMethods = () => {
  return (
    <MethodsContainer>
      <InnerContainer>
        <LoginUserPassword />
      </InnerContainer>
    </MethodsContainer>
  );
};

export default LoginMethods;
