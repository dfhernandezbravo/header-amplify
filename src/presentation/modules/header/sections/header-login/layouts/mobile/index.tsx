import Mobile from '@components/layout/mobile';
import { useAppSelector } from '@hooks/storeHooks';
import { LoginMobileButton } from '../../styles';
import Image from 'next/image';

const HeaderLoginMobile = () => {
  const { customer } = useAppSelector((state) => state.customer);

  return (
    <Mobile>
      <LoginMobileButton href="/account">
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
