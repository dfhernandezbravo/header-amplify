import { bffWebInstance } from '@data-sources/bbf-web-instance';
import ShoppingCartService from '@interfaces/shopping-cart-service.interface';

const shoppingCartService: ShoppingCartService = {
  getShoppingCart: () => bffWebInstance.get('v1.1/shoppingcart'),
  addAddress: (data, cartId) =>
    bffWebInstance.post(`v1.1/shoppingcart/${cartId}/shipping`, data),
};

export default shoppingCartService;
