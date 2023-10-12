import { Commune, Regions } from '@entities/regionalizer/regionalizer.entity';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';

export const mapFormData = (
  communeSelected: Commune,
  regionSelected: Regions,
): AddNewAddressRequest => ({
  selectedAddresses: [
    {
      addressType: 'search',
      city: communeSelected?.name,
      country: 'CHL',
      geoCoordinates: [communeSelected?.lat!, communeSelected?.lon!],
      state: regionSelected?.name,
    },
  ],
});
