import * as React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { wrapper } from '../redux/store';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
