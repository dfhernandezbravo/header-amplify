import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useHandleLogout from '@modules/header/hooks/use-handle-logout';
import { closeCategories } from '@store/category/slices/category-slice';
import { useRouter } from 'next/router';
import HeaderLoginMobile from '../../../../../../../header-login/layouts/mobile';
import UserMenuItem from '../user-menu-item';
import { accountOptionsLogged } from './account-options-logged';
import { UserMenuContainer } from './styles';
import { setCustomer } from '@store/customer/slices/customer-slice';

const UserMenu = () => {
  const { customer } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isLogged = shoppingCart?.loggedIn;

  const { onClickLogout } = useHandleLogout();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const closeSession = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    onClickLogout();
    dispatch(setCustomer(null));
    dispatch(closeCategories());
  };

  const handleMenuLink = (link: string) => {
    router.push(link);
    dispatch(closeCategories());
  };

  if (isLogged) {
    return (
      <>
        <UserMenuContainer>
          <p className="greating">
            ¡Hola!{' '}
            <span className="greating-user-name">
              {customer?.firstName ?? ''}
            </span>
          </p>
        </UserMenuContainer>
        <UserMenuContainer>
          {accountOptionsLogged.map((menu, index) => (
            <UserMenuItem
              key={index}
              text={menu.text}
              image={menu.image}
              link={menu.link}
              handleOnClick={() => handleMenuLink(menu.link)}
            />
          ))}
          <UserMenuItem
            text="Cerrar sesión"
            image="/icons/header/close-session-gray.svg"
            link="#"
            handleOnClick={(event) => closeSession(event)}
          />
        </UserMenuContainer>
      </>
    );
  }

  return (
    <UserMenuContainer>
      <UserMenuItem
        link="/"
        image="/icons/header/offer-gray-icon.svg"
        text="Ofertas"
      />
      <HeaderLoginMobile />
      <UserMenuItem
        link="https://ayuda.easy.cl/ayuda/"
        image="/icons/header/help-icon.svg"
        text="Centro de ayuda"
      />
    </UserMenuContainer>
  );
};

export default UserMenu;
