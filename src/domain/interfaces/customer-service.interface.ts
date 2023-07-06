import { AxiosResponse } from 'axios';

export default interface CustomerService {
  getCustomer(email: string): Promise<AxiosResponse<Customer>>;
}
