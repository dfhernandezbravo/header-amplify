import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { FormComtainer, SelectWrapper } from './styles';
import { NewAddressFormType } from './types';

interface Props {
  regions: Regions[];
  handleOnSubmit: (data: NewAddressFormType) => void;
  isLoadingForm: boolean;
  addressSelected: AddressShoppingCart | null;
}

const getRegionDefault = (
  regions: Regions[],
  addressSelected: AddressShoppingCart | null,
) =>
  addressSelected
    ? regions.find((region) => region.name === addressSelected.state) ||
      regions[0]
    : regions[0];

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
  const regionDefault = getRegionDefault(regions, addressSelected);
  const communeDefault = getCommuneDefault(
    regionDefault.comunas,
    addressSelected,
  );

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    setValue,
  } = useForm<NewAddressFormType>();
  const [communes, setCommunes] = useState<Commune[]>([]);
  const region = watch('regionSelected');

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
        <label htmlFor="">Regiones</label>
        <Controller
          name="regionSelected"
          control={control}
          rules={{ required: true }}
          defaultValue={regionDefault}
          render={({ field }) => (
            <Select
              {...field}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              options={regions}
            />
          )}
        />
      </SelectWrapper>
      <SelectWrapper>
        <label htmlFor="">Comunas</label>
        <Controller
          name="communeSelected"
          control={control}
          rules={{ required: true }}
          defaultValue={communeDefault}
          render={({ field }) => (
            <Select
              placeholder="Selecciona comuna"
              {...field}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              options={communes}
            />
          )}
        />
      </SelectWrapper>
      <ButtonPrimary
        type="submit"
        disabled={!isValid}
        title={isLoadingForm ? 'Cargando...' : 'Guardar Ubicación'}
      />
    </FormComtainer>
  );
};

export default NewAddressForm;
