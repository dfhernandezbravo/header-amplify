import Mobile from '@components/layout/mobile';
import { useAppSelector, useAppDispatch } from '@hooks/storeHooks';
import { LoginMobileButton } from '../../styles';
import Image from 'next/image';
import { openModalLogin } from '@store/login/slices/login-slice';
import { closeCategories } from '@store/category/slices/category-slice';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { LOGIN_COOKIES } from '@infra/cookies';

const HeaderLoginMobile = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isUserLogged = shoppingCart?.loggedIn;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [cookies] = useCookies([LOGIN_COOKIES.SOFT_LOGIN]);
  const softLoginName = cookies.SoftLogin;

  const onClickLogin = () => {
    dispatch(closeCategories());
    if (isUserLogged) router.push('/account/profile');
    else {
      dispatch(openModalLogin());
    }
  };

  return (
    <Mobile>
      <LoginMobileButton onClick={onClickLogin}>
        <Image
          src="/icons/header/user-icon.svg"
          width={24}
          height={24}
          alt="user-icon"
        />
        {customer || softLoginName ? (
          <span>
            Hola <br /> {customer?.firstName || softLoginName}
          </span>
        ) : (
          <span>Inicia Sesión</span>
        )}
      </LoginMobileButton>
    </Mobile>
  );
};

export default HeaderLoginMobile;
