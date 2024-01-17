import { bffWebInstance } from '@data-sources/bbf-web-instance';
import { AUTHCOOKIES } from '@infra/cookies';
import CustomerService from '@interfaces/customer-service.interface';
import Cookies from 'universal-cookie';

const httpInstance = bffWebInstance;

httpInstance.interceptors.request.use(function (config) {
  const cookies = new Cookies();
  const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

const customerService: CustomerService = {
  getCustomer() {
    return httpInstance.get(`/customers`);
  },
  getAddressCustomer: () => httpInstance.get(`/customer/addresses`),
};

export default customerService;
