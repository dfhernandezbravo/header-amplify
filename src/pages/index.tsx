import { Provider } from 'react-redux';
import store from '@/store';
import Head from 'next/head';

export default function Home() {
  return (
    <Provider store={store}>
      <Head><></></Head>
    </Provider>
  )
}
