export type ShoppingCart = {
  cartId: string | undefined;
};

export type AddressShoppingCart = {
  addressType: 'search' | 'residential';
  city?: string;
  country: 'CHL';
  geoCoordinates?: string[] | number[];
  state?: string;
  neighborhood?: string;
  street?: string;
  number?: number;
  receiverName?: string;
  addressId?: string;
  postalCode?: string;
  complement?: string;
  reference?: string;
};
