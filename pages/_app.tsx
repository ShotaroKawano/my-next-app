import React, { FC } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
