import ProvidersLayout from '@components/layout/providers';
import { Customer } from '@entities/customer/customer.entity';
import { useState, useEffect } from 'react';
import ModalRegionalizer from '../header-modal-regionalizer';
import HeaderLocationContext from './context/header-location-context';
import HeaderLocationContainer from './header-location';
import { useEvent } from '@hooks/useEvent';
import { WindowsEvents } from '@events/index';
interface Props {
  orderFormId?: string;
  customer: Customer | null;
  isUserLogged: boolean;
}

const HeaderLocation = ({ orderFormId, customer, isUserLogged }: Props) => {
  const { consumeEvent, removeEventListener } = useEvent();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    consumeEvent(WindowsEvents.OPEN_LOCATION_MODAL, () => {
      setIsOpenModal(true);
    });

    return () => {
      removeEventListener(WindowsEvents.OPEN_LOCATION_MODAL);
    };
  }, []);

  return (
    <ProvidersLayout>
      <HeaderLocationContext.Provider
        value={{
          isOpenModal,
          orderFormId,
          customer,
          isUserLogged,
          onCloseModal: () => setIsOpenModal(false),
          onOpenModal: () => setIsOpenModal(true),
        }}
      >
        <HeaderLocationContainer />

        <ModalRegionalizer />
      </HeaderLocationContext.Provider>
    </ProvidersLayout>
  );
};

export default HeaderLocation;
