import ProvidersLayout from '@components/layout/providers';
import { Customer } from '@entities/customer/customer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useState } from 'react';
import ModalRegionalizer from '../header-modal-regionalizer';
import HeaderLocationContext from './context/header-location-context';
import HeaderLocationContainer from './header-location';

interface Props {
  orderFormId?: string;
  customer: Customer | null;
  addressSelected: AddressShoppingCart | null;
  isUserLogged: boolean;
}

const HeaderLocation = ({
  addressSelected,
  orderFormId,
  customer,
  isUserLogged,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <ProvidersLayout>
      <HeaderLocationContext.Provider
        value={{
          orderFormId,
          customer,
          isUserLogged,
          onCloseModal: () => setIsOpenModal(false),
          onOpenModal: () => setIsOpenModal(true),
        }}
      >
        <HeaderLocationContainer addressSelected={addressSelected} />

        <ModalRegionalizer
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      </HeaderLocationContext.Provider>
    </ProvidersLayout>
  );
};

export default HeaderLocation;
