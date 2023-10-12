import { Customer } from '@entities/customer/customer.entity';
import { IoIosArrowDown } from 'react-icons/io';
import { LoginButtonContainerDesktop, LoginUser } from './style';

interface Props {
  customer: Customer | null;
}

const LoginButton = ({ customer }: Props) => {
  return (
    <LoginUser>
      <span>¡Hola{customer ? ` ${customer?.firstName}` : ''}!</span>
      <LoginButtonContainerDesktop>
        <strong>{customer ? 'Mi cuenta' : 'Inicia Sesión'}</strong>
        {customer && <IoIosArrowDown />}
      </LoginButtonContainerDesktop>
    </LoginUser>
  );
};

export default LoginButton;
