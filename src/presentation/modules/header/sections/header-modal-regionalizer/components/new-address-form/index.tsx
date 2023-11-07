import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import {
  pendingAddNewAddress,
  successAddNewAddress,
} from '@store/regionalizer/slices/regionalizer-slice';
import getRegionalizerRegions from '@use-cases/regionalizer/get-regions';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import sendAnalyticNewAddressForm from './analytics';
import NewAddressForm from './form';
import { mapFormData } from './map-form-data';
import { NewAddressFormContainer } from './styles';
import { NewAddressFormType } from './types';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { WindowsEvents } from '@events/index';

interface Props {
  header?: React.ReactNode;
}

const NewAddress = ({ header }: Props) => {
  const dispatch = useAppDispatch();
  const { data: regions } = useQuery(['get-regions'], getRegionalizerRegions);
  const { isLoadingRegionalizer, addressSelected } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { orderFormId, isUserLogged, onCloseModal } = useContext(
    HeaderLocationContext,
  );

  const handleOnSubmit = async ({
    communeSelected,
    regionSelected,
  }: NewAddressFormType) => {
    try {
      const formData = mapFormData(communeSelected!, regionSelected);
      dispatch(pendingAddNewAddress(true));
      await addNewAddress({ data: formData, cartId: orderFormId! });
      dispatch(successAddNewAddress(formData.selectedAddresses[0]));
      sendAnalyticNewAddressForm({
        isUserLogged,
        regionSelected: regionSelected ? regionSelected.name : '',
        communeSelected: communeSelected ? communeSelected.name : '',
      });
      onCloseModal();
      customDispatchEvent({
        name: WindowsEvents.UPDATE_SHIPPING_CART,
        detail: null,
      });
    } catch (error) {
      throw new Error('Error');
    } finally {
      dispatch(pendingAddNewAddress(false));
    }
  };

  if (!regions) return <div>No hay regiones</div>;

  return (
    <NewAddressFormContainer>
      {header}

      <p>
        Te mostraremos los productos disponibles para la región y comuna
        seleccionados
      </p>

      <NewAddressForm
        regions={regions}
        handleOnSubmit={handleOnSubmit}
        isLoadingForm={isLoadingRegionalizer}
        addressSelected={addressSelected}
      />
    </NewAddressFormContainer>
  );
};

export default NewAddress;
