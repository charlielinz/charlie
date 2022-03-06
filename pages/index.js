import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import me from "../public/img/me.jpg";
import canada from "../public/img/canada.png";
import guam from "../public/img/guam.png";
import japan from "../public/img/japan.png";
import palau from "../public/img/palau.png";
import philippines from "../public/img/philippines.png";
import southKorea from "../public/img/south-korea.png";
import usa from "../public/img/united-states-of-america.png";

export default function Home() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Navbar />
      <div className="w-full h-96 bg-gray-300">
        <div className="pt-32 lg:pt-24 z-10 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
          <HeroBanner />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-16 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto gap-14">
        <div className="flex md:flex-col justify-center gap-4">
          <div className="relative w-60 md:w-40 md:h-40">
            <Image
              src={me}
              alt="me"
              layout="fill"
              objectFit="contain"
              priority={true}
              className="rounded-full"
            />
          </div>
          {windowWidth > 768 ? (
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
          <p className="justify-self-center md:justify-self-start mx-auto text-4xl md:text-5xl leading-tight pb-2 font-bold">
            Sharing travel & food guides!
          </p>
          <p className="pb-12 text-gray-500">A place you can find informations for travel and enjoy food porn.</p>
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
                <Image src={philippines} alt="philippines" width="32px" height="28px" />
                <Image src={southKorea} alt="southKorea" width="32px" height="28px" />
                <Image src={usa} alt="usa" width="32px" height="28px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto py-16 font-bold">
        <p className="text-4xl md:text-5xl leading-tight pb-2">In-depth Travel & Private Tour Guide</p>
        <p className="text-gray-500">Close to the local and discover those places you may miss. Find and establish your own travel style.</p>
      </div>
      <Footer />
    </>
  );
}
