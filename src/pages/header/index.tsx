import { Provider } from 'react-redux';
import store from '@store/index';
import Head from 'next/head';
import Header from '@modules/header';

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <></>
      </Head>
      <Header />
    </Provider>
  );
}
