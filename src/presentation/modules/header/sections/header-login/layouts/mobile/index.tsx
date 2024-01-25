import Mobile from '@components/layout/mobile';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { LoginMobileButton } from '../../styles';
import Image from 'next/image';
import { openModalLogin } from '@store/login/slices/login-slice';

const HeaderLoginMobile = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  return (
    <Mobile>
      <LoginMobileButton onClick={() => dispatch(openModalLogin())}>
        <Image
          src="/icons/header/user-icon.svg"
          width={24}
          height={24}
          alt="user-icon"
        />
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
