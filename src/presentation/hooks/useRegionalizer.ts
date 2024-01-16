import { useAppSelector } from '@hooks/storeHooks';

const useRegionalizer = () => {
  const { isLogged } = useAppSelector((state) => state.login);
  const { isOpenModalRegionalizer } = useAppSelector(
    (state) => state.regionalizer,
  );
  const { cartId: orderFormId } = useAppSelector(
    (state) => state.shoppingCartHeader,
  );
  const { customer } = useAppSelector((state) => state.customer);

  return {
    isUserLogged: isLogged,
    isOpenModalRegionalizer,
    orderFormId,
    customer,
  };
};

export default useRegionalizer;
