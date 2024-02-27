import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { customDispatchEvent } from '@store/events/dispatchEvents';

const useHandleLogout = () => {
  const cookies = new Cookies();
  const router = useRouter();

  const onClickLogout = () => {
    cookies.remove('softLogin');
    customDispatchEvent({ name: 'DISPATCH_LOGOUT', detail: {} });
    if (router?.pathname?.includes('/account')) {
      router.push('/');
    }
  };
  return { onClickLogout };
};

export default useHandleLogout;
