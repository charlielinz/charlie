import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Charlie Lin</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="description" content="It is all about my life."></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
        <meta
          name="og:description"
          content="It is all about life style."
        ></meta>
      </Head>
      <main className="font-inter text-gray-700 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto ">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
