import type { AppProps } from 'next/app';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        toastClassName="toastifyContainer"
        hideProgressBar
        autoClose={5000}
      />
    </>
  );
}

export default MyApp;
