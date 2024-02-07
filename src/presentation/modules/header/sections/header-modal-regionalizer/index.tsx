import Modal from '@components/atoms/modal';
import HeaderModalRegionalizer from './components/header-modal-regionalizer';
import ListAddressForm from './components/list-address-form';
import NewAddressForm from './components/new-address-form';
import { useAppSelector } from '@hooks/storeHooks';
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRegionalizer = ({ isOpen, onClose }: Props) => {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const isUserLogged = shoppingCart?.loggedIn;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      {isUserLogged ? (
        <ListAddressForm />
      ) : (
        <NewAddressForm
          header={<HeaderModalRegionalizer title="Ingresa tu ubicación" />}
        />
      )}
    </Modal>
  );
};

export default ModalRegionalizer;
