import React from "react";
import "normalize.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Journaling App</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
