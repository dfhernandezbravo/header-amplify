import ProvidersLayout from '@components/layout/providers';
import { Customer } from '@entities/customer/customer.entity';
import { useState } from 'react';
import ModalRegionalizer from '../header-modal-regionalizer';
import HeaderLocationContext from './context/header-location-context';
import HeaderLocationContainer from './header-location';

interface Props {
  orderFormId?: string;
  customer: Customer | null;
  isUserLogged: boolean;
}

const HeaderLocation = ({ orderFormId, customer, isUserLogged }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
