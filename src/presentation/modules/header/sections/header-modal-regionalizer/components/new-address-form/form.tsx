import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ButtonContainer, FormComtainer, SelectWrapper } from './styles';
import { NewAddressFormType } from './types';

interface Props {
  regions: Regions[];
  handleOnSubmit: (data: NewAddressFormType) => void;
  isLoadingForm: boolean;
  addressSelected: AddressShoppingCart | null;
}

const getCommuneDefault = (
  communes: Commune[],
  addressSelected: AddressShoppingCart | null,
) =>
  addressSelected &&
  communes.find((commune) => commune.name === addressSelected.city);

const NewAddressForm = ({
  regions,
  handleOnSubmit,
  isLoadingForm,
  addressSelected,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    setValue,
  } = useForm<NewAddressFormType>();
  const [communes, setCommunes] = useState<Commune[]>([]);
  const region = watch('regionSelected');

  const regionDefault = useMemo(() => {
    const regionSelected =
      regions.find((region) => region.name === addressSelected?.state) ||
      regions[0];
    if (addressSelected) {
      setValue('regionSelected', regionSelected);
      return regionSelected;
    }
    return undefined;
  }, [addressSelected]);

  const communeDefault =
    regionDefault && getCommuneDefault(regionDefault?.comunas, addressSelected);

  useEffect(() => {
    if (region) {
      const newCommunes = region.comunas.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setCommunes(newCommunes);
      setValue('communeSelected', null);
    }
  }, [region]);

  return (
    <FormComtainer onSubmit={handleSubmit(handleOnSubmit)}>
      <SelectWrapper>
        <Controller
          name="regionSelected"
          control={control}
          defaultValue={regionDefault}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              placeholder="Región"
              {...field}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              options={regions}
              isDisabled={isLoadingForm}
            />
          )}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Controller
          name="communeSelected"
          control={control}
          rules={{ required: true }}
          defaultValue={communeDefault}
          render={({ field }) => (
            <Select
              placeholder="Comuna"
              {...field}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              options={communes}
              isDisabled={!region || isLoadingForm}
            />
          )}
        />
      </SelectWrapper>
      <ButtonContainer isLoading={isLoadingForm}>
        <ButtonPrimary
          className="add-location-button"
          type="submit"
          disabled={!isValid || isLoadingForm}
          title={isLoadingForm ? '' : 'Guardar Ubicación'}
        />
      </ButtonContainer>
    </FormComtainer>
  );
};

export default NewAddressForm;
