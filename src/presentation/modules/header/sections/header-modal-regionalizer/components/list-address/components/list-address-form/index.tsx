import { useContext, useState } from 'react';
import ButtonPrimary from '@components/atoms/buttons/button-primary';
import HeaderModalRegionalizer from '../../../header-modal-regionalizer';
import RadioButtonAddress from '../../../radio-input-address';
import {
  ButtonNewAddress,
  ListAddressContainer,
  ListAddressFormContainer,
} from './styles';
import ListAddressSkeleton from '../../../list-address-skeleton';
import useBreakpoints from '@hooks/useBreakpoints';
import { CustomerAddress } from '@entities/customer/customer.entity';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import {
  pendingAddNewAddress,
  successAddNewAddress,
} from '@store/regionalizer/slices/regionalizer-slice';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import mapDataListAddressForm from '../../map-data-request';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { WindowsEvents } from '@events/index';

type ListAddressFormProps = {
  setStep: (value: 'list-address' | 'new-address') => void;
};

const ListAddressForm = ({ setStep }: ListAddressFormProps) => {
  const { isLoadingRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { isXs, isSm } = useBreakpoints();
  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.customer);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCartHeader);
  const { sendEventAnalytics } = useAnalytics();
  const { orderFormId, onCloseModal } = useContext(HeaderLocationContext);
  const isUserLogged = shoppingCart?.loggedIn;
  const [selectedAddress, setSelectedAddress] =
    useState<CustomerAddress | null>(null);

  const sameAddress = (
    address1: CustomerAddress,
    address2: CustomerAddress,
  ) => {
    const address1Str = `${address1.street} ${address1.number} ${address1.neighborhood} ${address1.state}`;
    const address2Str = `${address2.street} ${address2.number} ${address2.neighborhood} ${address2.state}`;
    return address1Str === address2Str;
  };

  const filterAddress = addresses.reduceRight(
    (acc: CustomerAddress[], address) => {
      // clean repeated address and address without street
      if (
        !acc.some(
          (item) =>
            (item.geoCoordinate[0] === address.geoCoordinate[0] &&
              item.geoCoordinate[1] === address.geoCoordinate[1]) ||
            sameAddress(item, address),
        ) &&
        address.street
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
      customDispatchEvent({
        name: WindowsEvents.UPDATE_SHIPPING_CART,
        detail: {
          origin: 'HEADER',
          location: selectedAddress?.neighborhood ?? selectedAddress?.city,
        },
      });
      onCloseModal();
    } catch (error) {
      throw new Error('Error');
    } finally {
      dispatch(pendingAddNewAddress(false));
    }
  };
  return (
    <ListAddressFormContainer>
      <HeaderModalRegionalizer
        title="Ingresa tu ubicación"
        renderIcon={isXs || isSm ? false : true}
      />
      <p className="title">Cuéntanos dónde quieres recibir tu compra</p>
      <ListAddressContainer>
        {filterAddress?.length === 0 ? (
          <ListAddressSkeleton />
        ) : (
          <>
            {filterAddress?.map((address) => (
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
  );
};

export default ListAddressForm;
