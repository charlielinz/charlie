import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import selfie from "../public/img/about/selfie.jpg";

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
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="max-w-screen-md mx-auto">
          <Image src={selfie} alt="selfie" layout="responsive" />
        </div>
        <div className="max-w-screen-lg mx-auto border-t-2 border-slate-400 my-12">
          <div className="flex flex-col gap-10 max-w-screen-md mx-auto py-6">
            <p className="text-2xl md:text-3xl font-black text-center">
            &ldquo;Life is short. Do not regret, do not hesitate.&rdquo;
              <br />
              -Charlie Lin
            </p>
            <p className="text-sm">
              Hi, This is Charlie Lin.
              <br />
              <br />
              Author, designer and founder of Charlielin.org, Charlie Lin is
              still a newbie for blogging. He owns an engineering bachlor and
              music performance master degree. He is a coder, a foodie, a
              traveler and a big fan of classical music.
              <br />
              <br />
              This is a place to share his thoughts and experiences, just take
              your time here.
              <br />
              <br />
              All of you are welcome!
            </p>
            <p className="text-sm"></p>
          </div>
        </div>
        {/* <div className="flex">
          <p className="w-20 h-20 bg-slate-900 rounded-full flex justify-center items-center shrink-0 ">
            <i className="fa-solid fa-graduation-cap text-amber-500 text-2xl"></i>
          </p>
          <p className="w-96 h-2 bg-slate-900 my-auto -ml-2"></p>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Abouts;
