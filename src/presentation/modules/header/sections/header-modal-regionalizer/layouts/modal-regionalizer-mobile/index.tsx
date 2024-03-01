import Mobile from '@components/layout/mobile';
import HeaderModalRegionalizer from '../../components/header-modal-regionalizer';
import ListAddressForm from '../../components/list-address-form';
import NewAddressForm from '../../components/new-address-form';
import dynamic from 'next/dynamic';
import { BlockScroll, Container } from './styles';
import { useContext, useEffect } from 'react';
import HeaderLocationContext from '../../../header-location/context/header-location-context';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import getAddressCustomer from '@use-cases/customer/get-address-customer';

type Props = {
  isUserLogged?: boolean;
};

const BottomSheet = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.bottom-sheet').then(
      (module) => module.BottomSheet,
    ),
  { ssr: false },
);

const ModalRegionalizerMobile = ({ isUserLogged }: Props) => {
  const { onCloseModal, isOpenModal } = useContext(HeaderLocationContext);
  const { addresses, customer } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (customer) dispatch(getAddressCustomer());
  }, [customer, dispatch]);

  return (
    <Mobile>
      <BlockScroll isOpen={isOpenModal} />
      <BottomSheet
        open={isOpenModal}
        onClose={onCloseModal}
        height={isUserLogged ? 550 : undefined}
      >
        <Container>
          {isUserLogged && addresses?.length ? (
            <ListAddressForm />
          ) : (
            <NewAddressForm
              header={<HeaderModalRegionalizer title="Ingresa tu ubicación" />}
            />
          )}
        </Container>
      </BottomSheet>
    </Mobile>
  );
};

export default ModalRegionalizerMobile;
