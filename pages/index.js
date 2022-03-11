import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import me from "../public/img/index/me.jpg";
import canada from "../public/img/index/canada.png";
import guam from "../public/img/index/guam.png";
import japan from "../public/img/index/japan.png";
import palau from "../public/img/index/palau.png";
import philippines from "../public/img/index/philippines.png";
import southKorea from "../public/img/index/south-korea.png";
import usa from "../public/img/index/united-states-of-america.png";

import travel1 from "../public/img/index/travel-1.jpg";
import travel2 from "../public/img/index/travel-2.jpg";
import travel3 from "../public/img/index/travel-3.jpg";
import travel4 from "../public/img/index/travel-4.jpg";
import travel5 from "../public/img/index/travel-5.jpg";

const Home = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Navbar />
      <div className="w-full h-96 bg-gray-300">
        <div className="pt-32 lg:pt-24 z-10 max-w-screen-xl mx-6 md:mx-auto md:px-6">
          <HeroBanner />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-16 max-w-screen-xl mx-6 md:mx-auto gap-14 md:px-6">
        <div className="flex md:flex-col justify-center gap-4">
          <div className="relative w-60 md:w-40 h-60 md:h-40">
            <Image
              src={me}
              alt="me"
              layout="fill"
              objectFit="contain"
              priority={true}
              className="rounded-full"
            />
          </div>
          {windowWidth >= 768 ? (
            <div className="flex flex-col items-center justify-center gap-1 text-lg md:pt-3 lg:pt-1">
              <p className="">It is my life style.</p>
              <p className="underline">
                <Link href="/about">About Charlie Lin</Link>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col">
          <p className="justify-self-center md:justify-self-start mx-auto text-4xl md:text-6xl leading-tight pb-2 font-bold">
            Sharing travel & food guides!
          </p>
          <p className="pb-4 xs:pb-16 text-gray-500">
            A place you can find informations for travel and enjoy food porn.
          </p>
          <div className="flex flex-col gap-1">
            <div>
              <i className="fa-solid fa-address-card text-xl w-6" />
              <span className="text-xl pl-4">Engineer / Pianist</span>
            </div>
            <div className="flex">
              <i className="fa-solid fa-tags text-xl w-6" />
              <span className="text-xl pl-4">
                Travel / Foodie / Bar / Coding / Music
              </span>
            </div>
            <div className="flex">
              <i className="fa-solid fa-map-pin text-xl w-6" />
              <div className="flex gap-2 text-2xl pl-4">
                <Image src={canada} alt="canada" width="32px" height="28px" />
                <Image src={guam} alt="guam" width="32px" height="28px" />
                <Image src={japan} alt="japan" width="32px" height="28px" />
                <Image src={palau} alt="palau" width="32px" height="28px" />
                <Image
                  src={philippines}
                  alt="philippines"
                  width="32px"
                  height="28px"
                />
                <Image
                  src={southKorea}
                  alt="southKorea"
                  width="32px"
                  height="28px"
                />
                <Image src={usa} alt="usa" width="32px" height="28px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-6 md:mx-auto py-16 md:px-6">
        <p className="text-4xl md:text-6xl leading-tight pb-2 font-bold">
          In-depth Travel & Private Tour Guide.
        </p>
        <p className="text-gray-500 pb-4">
          Close to the local and discover those places you may miss. Find and
          establish your own travel style.
        </p>
      </div>
      <div className="w-full bg-gradient-to-b from-sky-50 to-gray-50 pb-24">
        <div className="max-w-screen-md mx-6">
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 md:gap-8">
            <div class="transform duration-200 md:scale-90 md:hover:scale-100 md:-rotate-6">
              <Image className="rounded-md" src={travel1} alt="travel-1" />
            </div>
            <div class="col-start-3 transform duration-200 md:scale-90 md:hover:scale-100 md:rotate-6 md:translate-x-2 md:translate-y-15">
              <Image className="rounded-md" src={travel2} alt="travel-2" />
            </div>
            <div class="transform duration-200 md:hover:scale-110 md:translate-y-11">
              <Image className="rounded-md" src={travel3} alt="travel-3" />
            </div>
            <div class="transform duration-200 md:hover:scale-110 md:translate-y-20">
              <Image className="rounded-md" src={travel4} alt="travel-4" />
            </div>
            <div class="row-start-1 col-start-2 col-span-2 transform duration-200 md:hover:scale-110 md:translate-x-16 md:translate-y-4">
              <Image className="rounded-md" src={travel5} alt="travel-5" />
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
