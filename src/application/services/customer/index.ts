import { bffWebInstance } from '@data-sources/bbf-web-instance';
import CustomerService from '@interfaces/customer-service.interface';
import Cookies from 'js-cookie';

const httpInstance = bffWebInstance;

httpInstance.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const customerService: CustomerService = {
  getCustomer(email) {
    return httpInstance.get(`/customer/${email}`);
  },
};

export default customerService;
