import { AxiosResponse } from 'axios';

export default interface FooterService {
  getFooterData(): Promise<AxiosResponse<GetFooterData>>;
}
