import Desktop from '@components/layout/desktop';
import Modal from '@components/atoms/modal';
import ListAddressForm from '../../components/list-address-form';
import NewAddressForm from '../../components/new-address-form';
import { useContext } from 'react';
import HeaderLocationContext from '../../../header-location/context/header-location-context';

type Props = {
  isUserLogged?: boolean;
};

const ModalRegionalizerDesktop = ({ isUserLogged }: Props) => {
  const { onCloseModal, isOpenModal } = useContext(HeaderLocationContext);

  return (
    <Desktop>
      <Modal onClose={onCloseModal} isOpen={isOpenModal}>
        {isUserLogged ? <ListAddressForm /> : <NewAddressForm />}
      </Modal>
    </Desktop>
  );
};

export default ModalRegionalizerDesktop;
