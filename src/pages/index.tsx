import { Provider } from 'react-redux';

import Head from 'next/head';

import Footer from '@components/layouts/footer';
import store from '@store/index';
import Header from '@components/layouts/header';

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <></>
      </Head>
      <Header />
      <Footer />
    </Provider>
  );
}
