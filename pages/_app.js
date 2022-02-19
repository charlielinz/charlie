import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(vh)
    });
  });
  return (
    <>
      <Head>
        <title>Eilrahc</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="description" content="It is all about life style."></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
        <meta
          name="og:description"
          content="It is all about life style."
        ></meta>
        <link rel="icon" href="favicon.svg" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-inter text-gray-700">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
