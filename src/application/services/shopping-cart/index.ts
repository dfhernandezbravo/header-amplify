import { bffWebInstance } from '@data-sources/bbf-web-instance';
import ShoppingCartService from '@interfaces/shopping-cart-service.interface';

const shoppingCartService: ShoppingCartService = {
  getShoppingCart: () => bffWebInstance.get('shoppingcart'),
  getShoppingCartById: (cartId: string) => bffWebInstance.get(`shoppingcart/${cartId}`),
  addAddress: (data, cartId) =>
    bffWebInstance.post(`shoppingcart/${cartId}/shipping`, data),
};

export default shoppingCartService;
