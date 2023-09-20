import ButtonBack from '@components/atoms/button-back';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
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
import {
  ButtonNewAddress,
  HeaderNewAddressContainer,
  ListAddressContainer,
  ListAddressFormContainer,
} from './styles';

const ListAddressForm = () => {
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.customer);
  const { isLoadingRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );

  const { sendEventAnalytics } = useAnalytics();
  const { orderFormId, isUserLogged, customer, onCloseModal } = useContext(
    HeaderLocationContext,
  );

  const [selectedAddress, setSelectedAddress] =
    useState<CustomerAddress | null>(null);
  const [step, setStep] = useState<'list-address' | 'new-address'>(
    'list-address',
  );

  useEffect(() => {
    if (customer) dispatch(getAddressCustomer(customer.email));
  }, [customer, dispatch]);

  const HeaderNewAddress = () => (
    <HeaderNewAddressContainer>
      <ButtonBack onClick={() => setStep('list-address')} />
      <h3>Ingresa tu ubicación</h3>
    </HeaderNewAddressContainer>
  );

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

    const formData: AddNewAddressRequest = {
      selectedAddresses: [
        {
          addressType: selectedAddress.addressType,
          city: selectedAddress.city,
          country: selectedAddress.country,
          geoCoordinates: selectedAddress.geoCoordinate,
          state: selectedAddress.state,
          receiverName: selectedAddress.receiverName,
          addressId: selectedAddress.id,
          postalCode: selectedAddress.postalCode,
          neighborhood: selectedAddress.neighborhood,
          complement: selectedAddress.complement,
          reference: selectedAddress.reference,
          street: selectedAddress.street,
          number: selectedAddress.number,
        },
      ],
    };
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

      onCloseModal()
    } catch (error) {
      console.log();
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
        {filterRepeatedAddress.map((address) => (
          <RadioButtonAddress
            checked={selectedAddress?.id === address.id}
            text={`${address.street}, ${address.number}, ${address.neighborhood}, ${address.state}`}
            key={address.id}
            onChange={() => setSelectedAddress(address)}
            value={address.id}
          />
        ))}
      </ListAddressContainer>

      <ButtonNewAddress onClick={() => setStep('new-address')}>
        Elegir otra ubicación
      </ButtonNewAddress>

      <ButtonPrimary
        title={!isLoadingRegionalizer ? 'Guardar mi ubicación' : 'Cargando...'}
        disabled={!selectedAddress || isLoadingRegionalizer}
        onClick={handleOnClick}
      />
    </ListAddressFormContainer>
  ) : (
    <NewAddressForm header={<HeaderNewAddress />} />
  );
};

export default ListAddressForm;
