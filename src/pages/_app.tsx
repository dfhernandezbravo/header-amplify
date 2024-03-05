import '@assets/styles/globals.css';
import Footer from '@modules/footer';
import Header from '@modules/header';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <Header
        modules={{
          cart: true,
          categories: true,
          location: true,
          login: true,
          footerHeader: true,
          topBrands: true,
          logo: true,
          search: true,
        }}
        cartId=''
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default App;
