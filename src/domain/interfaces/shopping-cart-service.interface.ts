import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import { GetShoppingCart } from '@entities/shopping-cart/shopping-cart.response';
import { AxiosResponse } from 'axios';

interface ShoppingCartService {
  getShoppingCart(): Promise<AxiosResponse<GetShoppingCart>>;
  addAddress(
    data: AddNewAddressRequest,
    cartId: string,
  ): Promise<AxiosResponse<void>>;
}

export default ShoppingCartService;
