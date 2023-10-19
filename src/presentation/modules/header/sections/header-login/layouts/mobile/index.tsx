import Mobile from '@components/layout/mobile';
import { useAppSelector } from '@hooks/storeHooks';
import { LoginMobileButton } from '../../styles';

const HeaderLoginMobile = () => {
  const { customer } = useAppSelector((state) => state.customer);

  return (
    <Mobile>
      <LoginMobileButton href="https://www.easy.cl/micuenta#/">
        {customer ? (
          <span>
            Hola <br /> {customer.firstName}
          </span>
        ) : (
          <span>Inicia Sesión</span>
        )}
      </LoginMobileButton>
    </Mobile>
  );
};

export default HeaderLoginMobile;
