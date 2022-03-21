import Head from "next/head";
import Navbar from "../components/Navbar";

const Abouts = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <Navbar />
    </>
  );
};

export default Abouts;
