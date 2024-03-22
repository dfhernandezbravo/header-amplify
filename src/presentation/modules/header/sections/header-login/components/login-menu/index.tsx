import { Customer } from '@entities/customer/customer.entity';
import { useAppDispatch } from '@hooks/storeHooks';
import { LOGIN_COOKIES } from '@infra/cookies';
import useHandleLogout from '@modules/header/hooks/use-handle-logout';
import { setCustomer } from '@store/customer/slices/customer-slice';
import { Cookies } from 'react-cookie';
import { LoginMenuContainer, LogoutItem, MenuItem } from './style';
import { AccountLinks } from '@entities/customer/account-links';

interface Props {
  isMenuOpen: boolean;
  customer: Customer | null;
  menuOptions?: AccountLinks[];
  handleLogin: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const LoginMenu = ({
  isMenuOpen,
  customer,
  handleLogin,
  menuOptions,
}: Props) => {
  const cookies = new Cookies();
  const softLoginName = cookies.get(LOGIN_COOKIES.SOFT_LOGIN);
  const dispatch = useAppDispatch();
  const { onClickLogout } = useHandleLogout();

  const handleLogout = () => {
    onClickLogout();
    dispatch(setCustomer(null));
  };

  if (!customer && softLoginName) {
    return (
      <LoginMenuContainer isVisible={isMenuOpen}>
        <MenuItem href="" onClick={(event) => handleLogin(event)}>
          Inicia sesión
        </MenuItem>
      </LoginMenuContainer>
    );
  }

  return (
    <>
      {customer && (
        <LoginMenuContainer isVisible={isMenuOpen}>
          {menuOptions &&
            menuOptions.map(
              (item) =>
                item.isActive && (
                  <MenuItem
                    key={item.id}
                    href={
                      item.redirect.target === '_blank'
                        ? item.redirect.url
                        : `/account/${item.redirect.url}`
                    }
                    target={item.redirect.target || ''}
                  >
                    {item.label}
                  </MenuItem>
                ),
            )}
          <LogoutItem onClick={() => handleLogout()}>Cerrar sesión</LogoutItem>
        </LoginMenuContainer>
      )}
    </>
  );
};

export default LoginMenu;
