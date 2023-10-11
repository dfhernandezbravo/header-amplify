import { Cart } from '@entities/shopping-cart/cart.response';
import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import { GetShoppingCart } from '@entities/shopping-cart/shopping-cart.response';
import { AxiosResponse } from 'axios';

interface ShoppingCartService {
  getShoppingCart(): Promise<AxiosResponse<GetShoppingCart>>;
  getShoppingCartById(cartId:string): Promise<AxiosResponse<Cart>>
  addAddress(
    data: AddNewAddressRequest,
    cartId: string,
  ): Promise<AxiosResponse<void>>;
}

export default ShoppingCartService;
