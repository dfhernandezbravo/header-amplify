import { useAppDispatch } from '@hooks/storeHooks';
import { closeModalLogin } from '@store/login/slices/login-slice';
import getCustomer from '@use-cases/customer/get-customer';
import { AxiosError } from 'axios';

const useResponseLogin = () => {
  const dispatch = useAppDispatch();

  const getLoginResponse = (event: Event) => {
    event.stopImmediatePropagation();

    const customEvent = event as CustomEvent<{
      success: boolean;
      error: AxiosError;
    }>;

    const {
      detail: { success },
    } = customEvent;

    if (success) {
      dispatch(closeModalLogin());
      dispatch(getCustomer());
    }
  };

  return {
    getLoginResponse,
  };
};

export default useResponseLogin;
