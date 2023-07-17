type ShoppingCart = {
  orderFormId: string | undefined;
};

type AddressShoppingCart = {
  addressType: 'search' | 'residential';
  city?: string;
  country: 'CHL';
  geoCoordinates?: string[] | number[];
  state?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  receiverName?: string;
  addressId?: string;
  postalCode?: string;
  complement?: string;
  reference?: string;
};
