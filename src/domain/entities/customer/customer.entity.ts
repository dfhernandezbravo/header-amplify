export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  document: string;
  userId: string;
  documentType: string;
  isEmployee: boolean;
};

export type CustomerAddress = {
  addressType: 'search' | 'residential';
  city: string;
  country: 'CHL';
  geoCoordinate: number[];
  state: string;
  neighborhood: string;
  street: string;
  number: number;
  postalCode: string;
  receiverName: string;
  reference: string;
  id: string;
  countryfake: string;
  complement: string;
  addressName: string;
};
