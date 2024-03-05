import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { CustomerAddress } from '@entities/customer/customer.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import {
  pendingAddNewAddress,
  successAddNewAddress,
} from '@store/regionalizer/slices/regionalizer-slice';
import getAddressCustomer from '@use-cases/customer/get-address-customer';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import { useContext, useEffect, useState } from 'react';
import HeaderModalRegionalizer from '../header-modal-regionalizer';
import NewAddressForm from '../new-address-form';
import RadioButtonAddress from '../radio-input-address';
import mapDataListAddressForm from './map-data-request';
import {
  ButtonNewAddress,
  ListAddressContainer,
  ListAddressFormContainer,
} from './styles';
import ListAddressSkeleton from '../list-address-skeleton';

const ListAddressForm = () => {
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.customer);

  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const { isLoadingRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );

  const { sendEventAnalytics } = useAnalytics();
  const { orderFormId, customer, onCloseModal } = useContext(
    HeaderLocationContext,
  );
  const isUserLogged = shoppingCart?.loggedIn;

  const [selectedAddress, setSelectedAddress] =
    useState<CustomerAddress | null>(null);
  const [step, setStep] = useState<'list-address' | 'new-address'>(
    'list-address',
  );

  useEffect(() => {
    if (customer) dispatch(getAddressCustomer());
  }, [customer, dispatch]);

  const filterRepeatedAddress = addresses.reduceRight(
    (acc: CustomerAddress[], address) => {
      if (
        !acc.some(
          (item) =>
            item.geoCoordinate[0] === address.geoCoordinate[0] &&
            item.geoCoordinate[1] === address.geoCoordinate[1],
        )
      ) {
        acc.push(address);
      }
      return acc;
    },
    [],
  );

  const handleOnClick = async () => {
    if (!selectedAddress) return;

    const formData = mapDataListAddressForm(selectedAddress);
    try {
      dispatch(pendingAddNewAddress(true));

      await addNewAddress({ data: formData, cartId: orderFormId! });

      dispatch(successAddNewAddress(selectedAddress));

      sendEventAnalytics({
        event: 'interaccion',
        category: 'Interacciones componente regionalizador',
        action: 'Click selección ingresa tu ubicación',
        tag: isUserLogged ? 'Usuario Logeado' : 'Usuario Guest',
        region: selectedAddress.state,
        comuna: selectedAddress.city,
      });

      onCloseModal();
    } catch (error) {
      throw new Error('Error');
    } finally {
      dispatch(pendingAddNewAddress(false));
    }
  };

  return step === 'list-address' ? (
    <ListAddressFormContainer>
      <HeaderModalRegionalizer title="Ingresa tu ubicación" />
      <p>Cuéntanos dónde quieres recibir tu compra</p>
      <h3>Tus direcciones</h3>
      <ListAddressContainer>
        {filterRepeatedAddress?.length === 0 ? (
          <ListAddressSkeleton />
        ) : (
          <>
            {filterRepeatedAddress?.map((address) => (
              <RadioButtonAddress
                checked={selectedAddress?.id === address.id}
                text={`${address.street}, ${address.number}`}
                state={`${address.neighborhood}, ${address.state}`}
                key={address.id}
                onChange={() => setSelectedAddress(address)}
                value={address.id}
              />
            ))}
          </>
        )}
      </ListAddressContainer>

      <ButtonNewAddress onClick={() => setStep('new-address')}>
        Elegir otra ubicación
      </ButtonNewAddress>
      <ButtonPrimary
        title={!isLoadingRegionalizer ? 'Guardar mi ubicación' : ''}
        disabled={!selectedAddress || isLoadingRegionalizer}
        onClick={handleOnClick}
        isLoading={isLoadingRegionalizer}
      />
    </ListAddressFormContainer>
  ) : (
    <NewAddressForm changeStep={setStep} />
  );
};

export default ListAddressForm;
