import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import getAddressCustomer from '@use-cases/customer/get-address-customer';
import React, { useEffect, useState } from 'react';
import {
  ButtonNewAddress,
  HeaderNewAddressContainer,
  ListAddressContainer,
  ListAddressFormContainer,
} from './styles';
import RadioButtonAddress from '../radio-input-address';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import NewAddressForm from '../new-address-form';
import ButtonBack from '@components/atoms/button-back';

const ListAddressForm = () => {
  const { addresses, customer } = useAppSelector((state) => state.customer);
  const { orderFormId } = useAppSelector((state) => state.shoppingCart);
  const { isLoadingRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );

  const dispatch = useAppDispatch();

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

  const filterRepeatedAddress = addresses.reduceRight((acc: CustomerAddress[], address) => {
    if (!acc.some((item) => (
      item.geoCoordinate[0] === address.geoCoordinate[0] &&
      item.geoCoordinate[1] === address.geoCoordinate[1]
    ))) {
      acc.push(address);
    }
    return acc;
  }, [])

  const handleOnClick = () => {
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
    dispatch(addNewAddress({ data: formData, cartId: orderFormId! }));
  };

  debugger
  return step === 'list-address' ? (
    <ListAddressFormContainer>
      <h3>Ingresa tu ubicación</h3>

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
