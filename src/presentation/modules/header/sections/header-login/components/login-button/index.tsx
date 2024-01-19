import { Customer } from '@entities/customer/customer.entity';
import { IoIosArrowDown } from 'react-icons/io';
import { LoginButtonContainerDesktop, LoginUser } from './style';
import { Cookies } from 'react-cookie';

interface Props {
  customer: Customer | null;
}

const LoginButton = ({ customer }: Props) => {
  const cookies = new Cookies();
  const softLoginName = cookies.get('softLogin');

  return (
    <LoginUser className="login-user">
      <span>Hola</span>
      <LoginButtonContainerDesktop>
        <strong>
          {customer
            ? ` ${customer?.firstName}`
            : softLoginName
            ? `${softLoginName}`
            : 'Inicia Sesión'}
        </strong>
        {(customer || softLoginName) && <IoIosArrowDown />}
      </LoginButtonContainerDesktop>
    </LoginUser>
  );
};

export default LoginButton;
