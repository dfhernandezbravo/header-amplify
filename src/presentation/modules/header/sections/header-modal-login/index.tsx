import ModalLoginDesktop from './layouts/modal-login-mobile';
import ModalLoginMobile from './layouts/modal-login-desktop';

const HeaderModalLogin = () => {
  return (
    <>
      <ModalLoginDesktop />
      <ModalLoginMobile />
    </>
  );
};

export default HeaderModalLogin;
