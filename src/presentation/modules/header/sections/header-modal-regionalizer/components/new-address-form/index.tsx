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
  const { isLoadingRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await getRegionalizerRegions();
      setRegions(response);
    })();
  }, []);

  const handleOnClick = () => {
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
    dispatch(addNewAddress({ data: formData, cartId: orderFormId! }));
  };

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
          onChange={(event) =>
            setRegionSelected(
              regions.find((region) => region.id === event.target.value),
            )
          }
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </SelectNewAddressForm>
      </SelectWrapper>

      <SelectWrapper>
        <label htmlFor="select-communes">Comunas</label>

        <SelectNewAddressForm
          id="select-communes"
          onChange={(event) =>
            setCommuneSelected(
              regionSelected?.comunas.find(
                (commune) => commune.id === event.target.value,
              ),
            )
          }
        >
          {regionSelected?.comunas.map((commune) => (
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
