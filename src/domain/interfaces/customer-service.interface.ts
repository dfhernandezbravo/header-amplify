import { Customer, CustomerAddress } from '@entities/customer/customer.entity';
import { AxiosResponse } from 'axios';

export default interface CustomerService {
  getCustomer(): Promise<AxiosResponse<Customer>>;
  getAddressCustomer(): Promise<AxiosResponse<CustomerAddress[]>>;
}
