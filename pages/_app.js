import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../google-analytics";
import me from "../public/img/index/me.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Charlie Lin</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="description" content="It is all about my life."></meta>
        <meta name="image" content={me}></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
        <meta name="og:image" content={me}></meta>
        <meta
          name="og:description"
          content="It is all about life style."
        ></meta>
      </Head>
      <Script
        id="fa"
        strategy="lazyOnload"
        src={`https://kit.fontawesome.com/1b3fa5cc6e.js`}
        crossOrigin="anonymous"
      />
      <Script
        id="GA4-install"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="GA4-script" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `}</Script>
      <Script
        id="google-adsense"
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <main className={`font-inter text-stone-900 bg-stone-50 selection:bg-stone-900 selection:text-amber-500 ${playfair.variable} ${inter.variable}`}>
        <div className="sticky top-0 z-50 w-full bg-gray-50 md:opacity-95">
          <Navbar />
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default MyApp;
