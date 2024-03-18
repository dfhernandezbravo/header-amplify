import { useAppDispatch } from '@hooks/storeHooks';
import {
  closeModalLogin,
  setLoginError,
} from '@store/login/slices/login-slice';
import getCustomer from '@use-cases/customer/get-customer';
import { AxiosError } from 'axios';

const useResponseLogin = () => {
  const dispatch = useAppDispatch();

  const loginSuccess = (event: Event) => {
    event.stopImmediatePropagation();

    const customEvent = event as CustomEvent<{
      success: boolean;
    }>;

    const {
      detail: { success },
    } = customEvent;

    if (success) {
      dispatch(closeModalLogin());
      dispatch(getCustomer());
    }
  };

  const loginError = (event: Event) => {
    event.stopImmediatePropagation();

    const customEvent = event as CustomEvent<{
      error: AxiosError;
    }>;

    const {
      detail: {
        error: { response },
      },
    } = customEvent;

    if (response?.status === 401 || response?.status === 403) {
      dispatch(
        setLoginError({ error: 'Unauthorized', message: response.statusText }),
      );
    }
  };

  return {
    loginSuccess,
    loginError,
  };
};

export default useResponseLogin;
