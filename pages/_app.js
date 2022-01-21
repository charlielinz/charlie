import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
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
        ></link>
      </Head>
      <main className="font-sans text-gray-700">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
