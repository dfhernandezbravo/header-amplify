import Modal from '@components/atoms/modal';
import HeaderModalRegionalizer from './components/header-modal-regionalizer';
import ListAddressForm from './components/list-address-form';
import NewAddressForm from './components/new-address-form';
import { useContext } from 'react';
import HeaderLocationContext from '../header-location/context/header-location-context';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalRegionalizer = ({ isOpen, onClose }: Props) => {
  const { isUserLogged } = useContext(HeaderLocationContext);

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
