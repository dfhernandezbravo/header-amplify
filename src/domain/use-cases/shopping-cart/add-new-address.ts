import { AddNewAddressRequest } from '@entities/shopping-cart/shopping-cart-request';
import shoppingCartService from '@services/shopping-cart';

type Params = {
  data: AddNewAddressRequest;
  cartId: string;
};

const addNewAddress = async (params: Params) =>
  shoppingCartService.addAddress(params.data, params.cartId);

export default addNewAddress;
