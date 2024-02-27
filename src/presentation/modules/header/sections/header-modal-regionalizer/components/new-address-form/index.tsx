import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HeaderLocationContext from '@modules/header/sections/header-location/context/header-location-context';
import {
  pendingAddNewAddress,
  setErrorSetLocation,
  successAddNewAddress,
} from '@store/regionalizer/slices/regionalizer-slice';
import getRegionalizerRegions from '@use-cases/regionalizer/get-regions';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import sendAnalyticNewAddressForm from './analytics';
import NewAddressForm from './form';
import { mapFormData } from './map-form-data';
import {
  ButtonArrowLeftBackContainer,
  MobileBackButton,
  NewAddressFormContainer,
} from './styles';
import { NewAddressFormType } from './types';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { WindowsEvents } from '@events/index';
import RegionalizerSkeleton from '../regionalizer-skeleton';
import ButtonArrowLeftBack from '@components/atoms/button-arrow-left-back';
import { useResponsive } from '@modules/header/hooks/useResponsive';
interface Props {
  changeStep?: (step: 'list-address' | 'new-address') => void;
  header?: React.ReactNode;
}

const NewAddress = ({ changeStep, header }: Props) => {
  const { isSm } = useResponsive();
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
      dispatch(setErrorSetLocation(true));
      setTimeout(() => {
        dispatch(setErrorSetLocation(false));
      }, 2000);
    } finally {
      dispatch(pendingAddNewAddress(false));
    }
  };
  const setListAddress = () => changeStep && changeStep('list-address');

  return (
    <NewAddressFormContainer>
      {header || ''}
      {isSm && (
        <ButtonArrowLeftBackContainer>
          {changeStep && <ButtonArrowLeftBack onClick={setListAddress} />}
          <span>Ingresa tu ubicación</span>
        </ButtonArrowLeftBackContainer>
      )}
      <p className="description">
        Te mostraremos los productos disponibles para la región y comuna
        seleccionados
      </p>

      {regions?.length ? (
        <NewAddressForm
          regions={regions}
          handleOnSubmit={handleOnSubmit}
          isLoadingForm={isLoadingRegionalizer}
          addressSelected={addressSelected}
        />
      ) : (
        <RegionalizerSkeleton />
      )}
      {changeStep && (
        <MobileBackButton onClick={setListAddress}>
          Volver atrás
        </MobileBackButton>
      )}
    </NewAddressFormContainer>
  );
};

export default NewAddress;
