import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import { FormEvent, useState } from 'react';
import { FormComtainer, SelectWrapper } from './styles';
import { NewAddressFormType } from './types';
import Select, { OptionsSelect } from '@components/atoms/select-bit';

interface Props {
  regions: Regions[];
  handleOnSubmit: (data: NewAddressFormType) => void;
  isLoadingForm: boolean;
  addressSelected: AddressShoppingCart | null;
}

const NewAddressForm = ({ regions, handleOnSubmit, isLoadingForm }: Props) => {
  const [communes, setCommunes] = useState<Commune[]>([]);
  const [regionSelected, setRegionSelected] = useState<Regions | null>(null);
  const [communeSelected, setCommuneSelected] = useState<Commune | null>(null);

  const handleChangeRegion = (optionSelected: OptionsSelect) => {
    const regionSelected = regions.filter(
      (region) => region.name === optionSelected.value,
    )[0];
    const arrayCommunes = regions.filter(
      (region) => region.name === optionSelected.value,
    )[0].comunas;
    const arrayCommunesOrdered = arrayCommunes?.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setRegionSelected(regionSelected);
    setCommunes(arrayCommunesOrdered);
    setCommuneSelected(null);
  };

  const handleOnChangeCommune = (optionSelected: OptionsSelect) => {
    const commune = communes?.filter(
      (commune) => commune.name === optionSelected.value,
    )[0];
    setCommuneSelected(commune as Commune);
  };

  const handleOnClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: NewAddressFormType = {
      regionSelected: regionSelected as Regions,
      communeSelected: communeSelected,
    };
    handleOnSubmit(data);
  };

  return (
    <FormComtainer onSubmit={(event) => handleOnClick(event)}>
      <SelectWrapper>
        <Select
          label="Región"
          options={regions.map((region) => region.name)}
          value={
            regionSelected
              ? { value: regionSelected.name, label: regionSelected.name }
              : undefined
          }
          onChange={(event) => {
            handleChangeRegion(event as OptionsSelect);
          }}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          label="Comuna"
          options={communes.map((commune) => ({
            value: commune.name,
            label: commune.name,
          }))}
          onChange={(event) => {
            handleOnChangeCommune(event as OptionsSelect);
          }}
          value={
            communeSelected
              ? { value: communeSelected.name, label: communeSelected.name }
              : undefined
          }
          disabled={!communes.length}
        />
      </SelectWrapper>

      <ButtonPrimary
        type="submit"
        disabled={!communeSelected || isLoadingForm}
        title={isLoadingForm ? '' : 'Guardar Ubicación'}
        isLoading={isLoadingForm}
      />
    </FormComtainer>
  );
};

export default NewAddressForm;
