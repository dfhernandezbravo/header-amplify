import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';

export type NewAddressFormType = {
  regionSelected: Regions;
  communeSelected: Commune | null;
};
