import '@assets/styles/globals.css';
import store from '@store/index';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
