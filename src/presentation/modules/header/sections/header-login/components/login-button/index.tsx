import { Customer } from '@entities/customer/customer.entity';
import { IoIosArrowDown } from 'react-icons/io';
import { LoginButtonContainerDesktop, LoginUser } from './style';
import { useCookies } from 'react-cookie';

interface Props {
  customer: Customer | null;
}

const LoginButton = ({ customer }: Props) => {
  const [cookies] = useCookies(['SoftLogin']);
  const softLoginName = cookies.SoftLogin;

  const loginText =
    customer?.firstName === '' || softLoginName === ''
      ? ''
      : customer?.firstName || softLoginName || 'Inicia Sesión';

  const isTwoParagraph = loginText.length > 0;

  return (
    <LoginUser className="login-user" isTwoParagraph={isTwoParagraph}>
      <span>Hola</span>
      <LoginButtonContainerDesktop>
        {loginText && <strong>{loginText}</strong>}
        {loginText !== 'Inicia Sesión' && <IoIosArrowDown />}
      </LoginButtonContainerDesktop>
    </LoginUser>
  );
};

export default LoginButton;
