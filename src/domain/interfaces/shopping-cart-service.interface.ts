import { GetShoppingCart } from '@entities/shopping-cart/shopping-cart.response';
import { AxiosResponse } from 'axios';

interface ShoppingCartService {
  getShoppingCart(): Promise<AxiosResponse<GetShoppingCart>>;
}

export default ShoppingCartService;
