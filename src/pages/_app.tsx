import '@assets/styles/globals.css';
import Footer from '@modules/footer';
import Header from '@modules/header';

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default App;
