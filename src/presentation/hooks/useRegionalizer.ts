import { useAppSelector } from '@hooks/storeHooks';

const useRegionalizer = () => {
  // const { loggedIn } = useAppSelector((state) => state.shoppingCartHeader);
  const { isOpenModalRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { cartId: orderFormId, shoppingCart } = useAppSelector(
    (state) => state.shoppingCartHeader,
  );
  const { customer } = useAppSelector((state) => state.customer);

  const isLogged = shoppingCart?.loggedIn ?? false; //

  return {
    isUserLogged: isLogged,
    isOpenModalRegionalizer,
    orderFormId,
    customer,
  };
};

export default useRegionalizer;
