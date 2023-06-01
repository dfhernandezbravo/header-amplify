import { Provider } from 'react-redux';

import Head from 'next/head';

import Footer from '@modules/footer';
import Header from '@modules/header';
import store from '@store/index';

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
