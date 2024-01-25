export type Commune = {
  id: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  isActive: boolean;
};

export type Regions = {
  id: string;
  isActive: boolean;
  name: string;
  comunas: Commune[];
};

type AddressComponents = {
  long_name: string;
  short_name: string;
  types: string[];
};

type LocationGoogle = {
  lat: number;
  lng: number;
};

type GeometryGoogle = {
  location: LocationGoogle;
};

export type GoogleMapResults = {
  address_components: AddressComponents[];
  geometry: GeometryGoogle;
};
