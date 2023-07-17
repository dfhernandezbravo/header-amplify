import Modal from '@components/atoms/modal';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import HeaderModalRegionalizer from './components/header-modal-regionalizer';
import ListAddressForm from './components/list-address-form';
import NewAddressForm from './components/new-address-form';
import { setOpenModalRegionalizer } from '@store/regionalizer/slices/regionalizer-slice';

const ModalRegionalizer = () => {
  const { isOpenModalRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { isLogged } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  return (
    <Modal
      onClose={() => dispatch(setOpenModalRegionalizer(false))}
      isOpen={isOpenModalRegionalizer}
    >
      <HeaderModalRegionalizer />
      {isLogged ? (
        <ListAddressForm />
      ) : (
        <NewAddressForm
          header={
            <div>
              <h4>Ingresa tu ubicación</h4>
            </div>
          }
        />
      )}
    </Modal>
  );
};

export default ModalRegionalizer;
