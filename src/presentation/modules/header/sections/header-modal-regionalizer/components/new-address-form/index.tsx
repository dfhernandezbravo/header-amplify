import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import getRegionalizerRegions from '@use-cases/regionalizer/get-regions';
import React, { useEffect, useState } from 'react';
import {
  NewAddressFormContainer,
  SelectNewAddressForm,
  SelectWrapper,
} from './styles';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import addNewAddress from '@use-cases/shopping-cart/add-new-address';


interface Props {
  header: React.ReactNode;
}

const NewAddressForm = ({ header }: Props) => {
  const [regions, setRegions] = useState<RegionalizerRegions[]>([]);
  const [regionSelected, setRegionSelected] = useState<
    RegionalizerRegions | undefined
  >();
  const [communeSelected, setCommuneSelected] = useState<Commune | undefined>();
  const { orderFormId } = useAppSelector((state) => state.shoppingCart);
  const { isLoadingRegionalizer, addressSelected } = useAppSelector(
    (state) => state.regionalizer,
  );

  const dispatch = useAppDispatch();

  const orderByAlphabetic = (arr: any) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
  }

  useEffect(() => {
    (async () => {
      const response = await getRegionalizerRegions();
      const indexOfPreselectedRegion = response?.findIndex(region => region.name === 'Metropolitana')
      let highlightedRegion = response.splice(indexOfPreselectedRegion, 1)[0]
      let regionOrdered = orderByAlphabetic(response)
      regionOrdered.unshift(highlightedRegion)
      setRegions(regionOrdered);
      setRegionSelected(highlightedRegion)
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

    // if(!orderFormId) {
    //   await dispatch(getShoppingCart())
    // }

    dispatch(addNewAddress({ data: formData, cartId: orderFormId! }));
  };

  const ordereredCommune = regionSelected && orderByAlphabetic(regionSelected?.comunas)
  useEffect(() => {
    if (!regions.length) return;
    setRegionSelected(
      regions.find((region) => region.name === 'Metropolitana'));
  }, [regions, addressSelected]);

  useEffect(() => {
    if (communeSelected) return;
    if(regionSelected) {
      setCommuneSelected(regionSelected?.comunas[0])
    }

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
              {region.name}
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
          {ordereredCommune?.map((commune:any) => (
            <option key={commune.id} value={commune.id}>
              {commune.name}
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
