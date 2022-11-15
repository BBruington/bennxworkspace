import { AppProps } from 'next/app';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to eldari!</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      </Head>
      <main className="app">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default CustomApp;
