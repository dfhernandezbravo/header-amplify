import ModalLoginDesktop from './layouts/modal-login-desktop';
import ModalLoginMobile from './layouts/modal-login-mobile';

const HeaderModalLogin = () => {
  return (
    <>
      <ModalLoginDesktop />
      <ModalLoginMobile />
    </>
  );
};

export default HeaderModalLogin;
