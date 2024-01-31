import { useAppDispatch } from '@hooks/storeHooks';
import { setError } from '@store/error/slices/error-slice';
import { closeModalLogin } from '@store/login/slices/login-slice';
import getCustomer from '@use-cases/customer/get-customer';
import handleHttpError from '@use-cases/errors';
import { AxiosError } from 'axios';

const useResponseLogin = () => {
  const dispatch = useAppDispatch();

  const getLoginResponse = (event: Event) => {
    event.stopImmediatePropagation();

    dispatch(setError(null));

    const customEvent = event as CustomEvent<{
      success: boolean;
      error: AxiosError;
    }>;

    const {
      detail: { success, error },
    } = customEvent;

    if (success) {
      dispatch(closeModalLogin());
      dispatch(getCustomer());
    } else {
      const axiosError = error as AxiosError;
      const errorApp = handleHttpError(axiosError.response!);
      dispatch(setError(errorApp));
    }
  };

  return {
    getLoginResponse,
  };
};

export default useResponseLogin;
