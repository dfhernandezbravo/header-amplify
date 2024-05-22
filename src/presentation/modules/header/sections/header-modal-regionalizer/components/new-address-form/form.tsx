import ButtonPrimary from '@components/atoms/buttons/button-primary';
import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddressShoppingCart } from '@entities/shopping-cart/shopping-cart.entity';
import dynamic from 'next/dynamic';
import { FormEvent, useState } from 'react';
import { FormComtainer, SelectWrapper } from './styles';
import { NewAddressFormType } from './types';

interface Props {
  regions: Regions[];
  handleOnSubmit: (data: NewAddressFormType) => void;
  isLoadingForm: boolean;
  addressSelected: AddressShoppingCart | null;
}

const Select = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.select').then(
      (module) => module.Select,
    ),
  { ssr: false },
);

const NewAddressForm = ({ regions, handleOnSubmit, isLoadingForm }: Props) => {
  const [communes, setCommunes] = useState<Commune[]>([]);
  const [regionSelected, setRegionSelected] = useState<Regions | null>(null);
  const [communeSelected, setCommuneSelected] = useState<Commune | null>(null);

  const handleChangeRegion = (value: string) => {
    const regionSelected = regions.filter((region) => region.name === value)[0];
    const arrayCommunes = regions.filter((region) => region.name === value)[0]
      .comunas;
    const arrayCommunesOrdered = arrayCommunes?.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setRegionSelected(regionSelected);
    setCommunes(arrayCommunesOrdered);
  };

  const handleOnChangeCommune = (value: string) => {
    const commune = communes?.filter((commune) => commune.name === value)[0];
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
          onChange={(event) => {
            handleChangeRegion(event.value);
          }}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          label="Comuna"
          options={communes.map((commune) => commune.name)}
          onChange={(event) => handleOnChangeCommune(event.value)}
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
