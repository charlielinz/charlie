import Image from "next/image";
import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import me from "../public/img/me.jpg";

export default function Home() {
  const windowWidth = useWindowWidth();
  return (
    <header>
      <Navbar />
      <div className="w-full h-96 bg-gray-300">
        <div className="pt-32 lg:pt-24 z-10 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
          <HeroBanner />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between py-16 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto gap-14">
        <div className="flex md:flex-col-reverse justify-center md:items-end gap-4">
          <div className="flex md:flex-col items-center gap-1 text-lg md:pr-5">
            <p className="md:text-base lg:text-xl pt-6 md:pt-0">It is my life style.</p>
            <p className="underline md:text-base lg:text-xl">
              <Link href="/about">About Charlie Lin</Link>
            </p>
          </div>
          {windowWidth > 768 ? (
            <div className="relative md:w-40 lg:w-48 md:h-40 lg:h-48">
              <Image
                src={me}
                alt="me"
                layout="fill"
                objectFit="contain"
                priority={true}
                className="rounded-full"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col justify-between">
          <p className="justify-self-center md:justify-self-start mx-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-8 font-bold">
            Sharing some travel & food guides!
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
                <p>🇺🇸</p>
                <p>🇨🇦</p>
                <p>🇵🇼</p>
                <p>🇬🇺</p>
                <p>🇯🇵</p>
                <p>🇰🇷</p>
                <p>🇵🇭</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </header>
  );
}
