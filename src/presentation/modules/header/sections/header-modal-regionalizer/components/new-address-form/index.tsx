import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import useAnalytics from '@hooks/useAnalytics';
import {
  pendingAddNewAddress,
  successAddNewAddress,
} from '@store/regionalizer/slices/regionalizer-slice';
import getRegionalizerRegions from '@use-cases/regionalizer/get-regions';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';
import React, { useEffect, useState } from 'react';
import {
  NewAddressFormContainer,
  SelectNewAddressForm,
  SelectWrapper,
} from './styles';

interface Props {
  header?: React.ReactNode;
}

const NewAddressForm = ({ header }: Props) => {
  const [regions, setRegions] = useState<RegionalizerRegions[]>([]);
  const [regionSelected, setRegionSelected] = useState<
    RegionalizerRegions | undefined
  >();
  const [communeSelected, setCommuneSelected] = useState<Commune | undefined>();
  const { orderFormId } = useAppSelector((state) => state.shoppingCartHeader);
  const { isLoadingRegionalizer, addressSelected } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { isLogged } = useAppSelector((state) => state.login);

  const { sendEventAnalytics } = useAnalytics();

  const dispatch = useAppDispatch();

  const orderByAlphabeticRegions = (arr: RegionalizerRegions[]) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  const orderByAlphabeticCommune = (arr: Commune[]) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  };

  useEffect(() => {
    (async () => {
      const response = await getRegionalizerRegions();
      const indexOfPreselectedRegion = response?.findIndex(
        (region) => region?.name === 'Metropolitana',
      );
      let highlightedRegion = response.splice(indexOfPreselectedRegion, 1)[0];
      let regionOrdered = orderByAlphabeticRegions(response);
      regionOrdered.unshift(highlightedRegion);
      setRegions(regionOrdered);
      setRegionSelected(highlightedRegion);
    })();
  }, []);

  const handleOnClick = async () => {
    const formData: AddNewAddressRequest = {
      selectedAddresses: [
        {
          addressType: 'search',
          city: communeSelected?.name,
          country: 'CHL',
          geoCoordinates: [communeSelected?.lat!, communeSelected?.lon!],
          state: regionSelected?.name,
        },
      ],
    };

    try {
      dispatch(pendingAddNewAddress(true));
      await addNewAddress({ data: formData, cartId: orderFormId! });
      dispatch(successAddNewAddress(formData.selectedAddresses[0]));
      sendEventAnalytics({
        event: 'interaccion',
        category: 'Interacciones componente regionalizador',
        action: 'Click selección ingresa tu ubicación',
        tag: isLogged ? 'Usuario Logeado' : 'Usuario Guest',
        region: regionSelected?.name,
        comuna: communeSelected?.name,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(pendingAddNewAddress(false));
    }
  };

  const ordereredCommune =
    regionSelected && orderByAlphabeticCommune(regionSelected?.comunas);
  useEffect(() => {
    if (!regions.length) return;

    if (addressSelected?.state) {
      return setRegionSelected(
        regions.find((region) => region?.name === addressSelected?.state),
      );
    }

    setRegionSelected(
      regions.find((region) => region?.name === 'Metropolitana'),
    );
  }, [regions, addressSelected]);

  useEffect(() => {
    if (communeSelected) {
      return setCommuneSelected(
        regionSelected?.comunas.find(
          (commune) => commune?.name === addressSelected?.city,
        ),
      );
    }

    if (regionSelected) {
      setCommuneSelected(regionSelected?.comunas[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionSelected, addressSelected]);

  return (
    <NewAddressFormContainer>
      {header}

      <p>
        Te mostraremos los productos disponibles para la región y comuna
        seleccionados
      </p>

      <SelectWrapper>
        <label htmlFor="select-regions">Regiones</label>
        <SelectNewAddressForm
          id="select-regions"
          value={regionSelected?.id}
          onChange={(event) =>
            setRegionSelected(
              regions.find((region) => region.id === event.target.value),
            )
          }
        >
          {regions?.map((region) => (
            <option key={region?.id} value={region?.id}>
              {region?.name}
            </option>
          ))}
        </SelectNewAddressForm>
      </SelectWrapper>

      <SelectWrapper>
        <label htmlFor="select-communes">Comunas</label>

        <SelectNewAddressForm
          id="select-communes"
          value={communeSelected?.id}
          onChange={(event) =>
            setCommuneSelected(
              regionSelected?.comunas.find(
                (commune) => commune.id === event.target.value,
              ),
            )
          }
        >
          {ordereredCommune?.map((commune: Commune) => (
            <option key={commune?.id} value={commune?.id}>
              {commune?.name}
            </option>
          ))}
        </SelectNewAddressForm>
      </SelectWrapper>

      <ButtonPrimary
        onClick={handleOnClick}
        disabled={!communeSelected || isLoadingRegionalizer}
        title={isLoadingRegionalizer ? 'Cargando...' : 'Guardar Ubicación'}
      />
    </NewAddressFormContainer>
  );
};

export default NewAddressForm;
