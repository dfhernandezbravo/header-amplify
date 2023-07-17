import { AxiosResponse } from 'axios';

export default interface RegionalizerService {
  getRegions(): Promise<AxiosResponse<GetRegionalizerRegionsResponse>>;
}
