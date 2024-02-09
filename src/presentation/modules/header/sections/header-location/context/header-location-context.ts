import { Customer } from '@entities/customer/customer.entity';
import { createContext } from 'react';

interface ContextValues {
  isOpenModal: boolean;
  orderFormId: string | null | undefined;
  customer: Customer | null;
  isUserLogged: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

const HeaderLocationContext = createContext<ContextValues>({
  isOpenModal: false,
  orderFormId: null,
  customer: null,
  isUserLogged: false,
  onCloseModal: () => {},
  onOpenModal: () => {},
});

export default HeaderLocationContext;
