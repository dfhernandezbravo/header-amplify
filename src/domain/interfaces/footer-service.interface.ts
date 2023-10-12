import { GetFooterData } from '@entities/footer/footer.response';
import { AxiosResponse } from 'axios';

export default interface FooterService {
  getFooterData(): Promise<AxiosResponse<GetFooterData>>;
}
