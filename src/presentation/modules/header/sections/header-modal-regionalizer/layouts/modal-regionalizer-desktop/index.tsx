import Desktop from '@components/layout/desktop';
import Modal from '@components/atoms/modal';
import ListAddressForm from '../../components/list-address-form';
import NewAddressForm from '../../components/new-address-form';
import { useContext } from 'react';
import HeaderLocationContext from '../../../header-location/context/header-location-context';
import { useAppSelector } from '@hooks/storeHooks';
import { GrClose } from 'react-icons/gr';
import { ModalHeader } from './style';

type Props = {
  isUserLogged?: boolean;
};

const ModalRegionalizerDesktop = ({ isUserLogged }: Props) => {
  const { onCloseModal, isOpenModal } = useContext(HeaderLocationContext);
  const { addresses } = useAppSelector((state) => state.customer);

  return (
    <Desktop>
      <Modal onClose={onCloseModal} isOpen={isOpenModal}>
        <ModalHeader>
          <span>Ingresa tu ubicación</span>
          <GrClose cursor={'pointer'} onClick={onCloseModal} size={20} />
        </ModalHeader>
        {isUserLogged && addresses?.length ? (
          <ListAddressForm />
        ) : (
          <NewAddressForm />
        )}
      </Modal>
    </Desktop>
  );
};

export default ModalRegionalizerDesktop;
