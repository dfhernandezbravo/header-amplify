import { GetRegionsResponse } from '@entities/regionalizer/regionalizer.response';
import { AxiosResponse } from 'axios';

export default interface RegionalizerService {
  getRegions(): Promise<AxiosResponse<GetRegionsResponse>>;
}
