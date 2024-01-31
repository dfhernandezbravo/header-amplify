import Image from 'next/image';
import React from 'react';
import useAnalytics from '@hooks/useAnalytics';
import { useRouter } from 'next/router';

const logoURL =
  'https://easycl.vtexassets.com/assets/vtex.file-manager-graphql/images/97740859-8d6b-4562-ad02-d6fd37c14e32___bab6e437e21af76315174bd3b460d74a.svg';

const HeaderLogo = () => {
  const { sendEventAnalytics } = useAnalytics();
  const router = useRouter();
  const { pathname } = router;

  const handleRedirect = () => {
    if (pathname.includes('cart')) router.back();
    else router.push('/');
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      className="logo"
      onClick={() => {
        handleRedirect();
        sendEventAnalytics({
          event: 'interaccion',
          category: 'Interacciones Header',
          action: 'Click en el logo',
          tag: pathname,
        });
      }}
    >
      <Image
        src={logoURL}
        alt="Easy"
        width={60}
        height={60}
        title="Easy Home"
      />
    </div>
  );
};

export default HeaderLogo;
