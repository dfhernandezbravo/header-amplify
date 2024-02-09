import { useAppSelector } from '@hooks/storeHooks';
import ModalRegionalizerDesktop from './layouts/modal-regionalizer-desktop';
import ModalRegionalizerMobile from './layouts/modal-regionalizer-mobile';

const ModalRegionalizer = () => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isUserLogged = shoppingCart?.loggedIn;

  return (
    <>
      <ModalRegionalizerMobile isUserLogged={isUserLogged} />
      <ModalRegionalizerDesktop isUserLogged={isUserLogged} />
    </>
  );
};

export default ModalRegionalizer;
