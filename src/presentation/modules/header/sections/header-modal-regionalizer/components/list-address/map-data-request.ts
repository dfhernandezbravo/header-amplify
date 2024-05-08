import { CustomerAddress } from '@entities/customer/customer.entity';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';

function mapDataListAddressForm(
  selectedAddress: CustomerAddress,
): AddNewAddressRequest {
  return {
    selectedAddresses: [
      {
        addressType: selectedAddress.addressType,
        city: selectedAddress.city,
        country: selectedAddress.country,
        geoCoordinates: selectedAddress.geoCoordinate,
        state: selectedAddress.state,
        receiverName: selectedAddress.receiverName,
        addressId: selectedAddress.id,
        postalCode: selectedAddress.postalCode,
        neighborhood: selectedAddress.neighborhood,
        complement: selectedAddress.complement,
        reference: selectedAddress.reference,
        street: selectedAddress.street,
        number: selectedAddress.number,
      },
    ],
  };
}

export default mapDataListAddressForm;
