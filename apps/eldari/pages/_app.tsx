import { AppProps } from 'next/app';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import {useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
      <ReactNotifications />
      <main className="app">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default CustomApp;
