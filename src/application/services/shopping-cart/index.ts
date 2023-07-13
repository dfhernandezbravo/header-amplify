import { bffWebInstance } from '@data-sources/bbf-web-instance';
import ShoppingCartService from '@interfaces/shopping-cart-service.interface';

const shoppingCartService: ShoppingCartService = {
  getShoppingCart: () => bffWebInstance.get('shoppingcart'),
};

export default shoppingCartService;
