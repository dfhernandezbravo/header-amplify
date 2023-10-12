import { Customer } from '@entities/customer/customer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import store, { persistor } from '@store/index';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
      </PersistGate>
    </Provider>
  );
};

export default HeaderLocation;
