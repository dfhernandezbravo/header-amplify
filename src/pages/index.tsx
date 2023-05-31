import { Provider } from 'react-redux';
import store from '@/store';
import Head from 'next/head';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

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
