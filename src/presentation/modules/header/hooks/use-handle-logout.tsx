import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { customDispatchEvent } from '@store/events/dispatchEvents';
import { LOGIN_COOKIES } from '@infra/cookies';
import { AUTH_EVENTS } from '@infra/events/auth';

const useHandleLogout = () => {
  const cookies = new Cookies();
  const router = useRouter();

  const onClickLogout = () => {
    cookies.remove(LOGIN_COOKIES.SOFT_LOGIN);
    customDispatchEvent({ name: AUTH_EVENTS.DISPATCH_LOGOUT, detail: {} });
    if (router?.pathname?.includes('/account')) {
      router.push('/');
    }
  };
  return { onClickLogout };
};

export default useHandleLogout;
