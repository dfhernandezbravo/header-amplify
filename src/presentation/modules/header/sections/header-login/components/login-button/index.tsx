import { IoIosArrowDown } from 'react-icons/io';
import { LoginButtonContainerDesktop, LoginUser } from './style';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '@hooks/storeHooks';

const LoginButton = () => {
  const [cookies] = useCookies(['SoftLogin']);
  const softLoginName = cookies.SoftLogin;
  const { customer, isLoadingCustomer } = useAppSelector(
    (state) => state.customer,
  );

  const getText = () => {
    if (isLoadingCustomer && !customer) {
      return { displayName: ' ', isTwoParagraph: false };
    }
    if (customer?.firstName) {
      return {
        displayName: customer.firstName,
        isTwoParagraph: customer.firstName.length > 0,
      };
    }
    if (customer?.firstName === '') {
      return { isTwoParagraph: false };
    }
    if (typeof softLoginName === 'string') {
      return { displayName: softLoginName, isTwoParagraph: true };
    }
    return { displayName: 'Inicia Sesión', isTwoParagraph: true };
  };

  const textResult = getText();

  return (
    <LoginUser
      className="login-user"
      isTwoParagraph={textResult.isTwoParagraph}
    >
      <span>Hola</span>
      <LoginButtonContainerDesktop>
        {textResult?.displayName && <strong>{textResult.displayName}</strong>}
        {typeof customer?.firstName === 'string' && <IoIosArrowDown />}
      </LoginButtonContainerDesktop>
    </LoginUser>
  );
};

export default LoginButton;
