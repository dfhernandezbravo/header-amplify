import { GoogleMapResults, Regions } from './regionalizer.entity';

export type GetRegionsResponse = {
  value: Regions[];
};

export type GetDataGoogleMaps = {
  results: GoogleMapResults[];
};
