import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

import recitalPoster from "../public/img/index/recital-poster.jpg";

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
      <div className="flex flex-col md:flex-row py-24 max-w-screen-xl mx-6 md:mx-auto gap-14 md:px-6">
        <div className="flex md:flex-col justify-center gap-4">
          <div className="relative w-60 md:w-48 h-60 md:h-48">
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
        <div className="flex flex-col justify-around">
          <p className="justify-self-center md:justify-self-start mx-auto text-4xl md:text-6xl leading-tight pb-2 font-bold">
            Get youself ready for adventures!
          </p>
          <p className="pb-4 xs:pb-16 text-gray-500">
            A place to discover, taste and chill.
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
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 w-full py-6 md:py-16 max-w-screen-xl mx-auto">
        <div className="mx-6">
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 md:gap-8">
            <div className="transform duration-200 md:scale-90 md:hover:scale-100 md:-rotate-6 overflow-visible">
              <Image className="rounded-xl" src={travel1} alt="travel-1" />
            </div>
            <div className="col-start-3 transform duration-200 md:scale-90 md:hover:scale-100 md:rotate-6 md:translate-x-2 md:translate-y-15">
              <Image className="rounded-xl" src={travel2} alt="travel-2" />
            </div>
            <div className="transform duration-200 md:hover:scale-110 md:translate-y-11">
              <Image className="rounded-xl" src={travel3} alt="travel-3" />
            </div>
            <div className="transform duration-200 md:hover:scale-110 md:translate-y-20">
              <Image className="rounded-xl" src={travel4} alt="travel-4" />
            </div>
            <div className="row-start-1 col-start-2 col-span-2 transform duration-200 md:hover:scale-110 md:translate-x-14 md:translate-y-4">
              <Image className="rounded-xl" src={travel5} alt="travel-5" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-auto py-4 md:px-6 min-w-[40%]">
          <p className="text-4xl md:text-6xl leading-tight pb-2 font-bold">
            In-depth travel & private tour guide.
          </p>
          <p className="text-gray-500 pb-4 md:pb-24">
            Close to the local and discover those places you may miss. Find and
            establish your own travel style.
          </p>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full py-2 px-4 md:px-6">
            <Link href="/travel/posts">
              <a className="flex items-center gap-2 text-lg md:text-xl">
                <span>Watch more</span>
                <i className="fa-solid fa-angle-right" />
              </a>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full py-6 md:py-28 max-w-screen-xl mx-auto">
        <div className="mx-6 md:ml-auto md:px-6 min-w-[40%]">
          <p className="text-4xl md:text-6xl leading-tight pb-2 font-bold">
            No more struggle with your meals.
          </p>
          <p className="text-gray-500 pb-4 md:pb-24">
            Tons of food official review by Charlie Lin, the next Michelin.
          </p>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full py-2 px-4 md:px-6">
            <Link href="/food/posts">
              <a className="flex items-center gap-2 text-lg md:text-xl">
                <span>Watch more</span>
                <i className="fa-solid fa-angle-right" />
              </a>
            </Link>
          </button>
        </div>
        <div className="min-w-[45%] mx-12 py-8 md:py-0">
          <div className="bg-slate-100 rounded-xl shadow-lg">
            <div className="p-4 space-y-2">
              <div className="flex gap-8 py-2">
                <motion.button
                  className="py-1 px-5 rounded-lg text-lg shadow-md"
                  initial={{
                    backgroundColor: "rgb(100 116 139)",
                    color: "rgb(243 244 246)",
                  }}
                  animate={{
                    backgroundColor: "rgb(226 232 240)",
                    color: "rgb(55 65 81)",
                  }}
                  transition={{
                    delay: 1,
                    duration: "0.5",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: "1.5",
                    ease: "easeInOut",
                  }}
                >
                  New Post
                </motion.button>
                <motion.button
                  className="py-1 px-5 rounded-lg text-lg shadow-md"
                  initial={{
                    backgroundColor: "rgb(226 232 240)",
                    color: "rgb(55 65 81)",
                  }}
                  animate={{
                    backgroundColor: "rgb(100 116 139)",
                    color: "rgb(243 244 246)",
                  }}
                  transition={{
                    delay: 1,
                    duration: "0.5",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: "1.5",
                    ease: "easeInOut",
                  }}
                >
                  Top Rated
                </motion.button>
              </div>
              <div className="py-2">
                <div className="p-4 border-t-2 border-t-gray-200">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Omakase</p>
                      <p className="text-sm text-gray-500">2022-02-22</p>
                    </div>
                    <p className="space-x-0.5 pt-1">
                      <i className="fa-solid fa-star text-lg text-amber-400" />
                      <span>8.4</span>
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t-2 border-t-gray-200">
                  <motion.div
                    className="flex justify-between"
                    initial={{ translateY: 0 }}
                    animate={{ translateY: 90 }}
                    transition={{
                      delay: 1,
                      duration: "0.5",
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: "1.5",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Yakiniku</p>
                      <p className="text-sm text-gray-500">2022-01-12</p>
                    </div>
                    <p className="space-x-0.5 pt-1">
                      <i className="fa-solid fa-star text-lg text-amber-400" />
                      <span>7.5</span>
                    </p>
                  </motion.div>
                </div>
                <div className="p-4 border-t-2 border-t-gray-200">
                  <motion.div
                    className="flex justify-between"
                    initial={{ translateY: 0 }}
                    animate={{ translateY: -90 }}
                    transition={{
                      delay: 1,
                      duration: "0.5",
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: "1.5",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Pasta</p>
                      <p className="text-sm text-gray-500">2021-12-30</p>
                    </div>
                    <p className="space-x-0.5 pt-1">
                      <i className="fa-solid fa-star text-lg text-amber-400" />
                      <span>8.0</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto py-6">
        <span className="mx-12">
          <Image
            src={recitalPoster}
            alt="recital-poster"
            width={350}
            height={500}
          />
        </span>
        <div className="max-w-screen-md mx-6">
          <p className="text-4xl md:text-6xl leading-tight pb-2 font-bold">
            Approaching to classical music is way too easy.
          </p>
          <p className="text-gray-500 pb-4 md:pb-12">
            Get into the classical music scene with this guide, enjoy several
            recitals here.
          </p>
          <div className="hidden md:block">
            <p className="text-2xl font-semibold py-4">
              One solo & Two chambers
            </p>
            <ul className="text-gray-500 pb-12">
              <li className="list-disc list-inside">Piano solo recital</li>
              <li className="list-disc list-inside">Piano trio chamber - piano, oboe, bassoon</li>
              <li className="list-disc list-inside">Piano trio chamber - piano, flute, clarinet</li>
            </ul>
          </div>
          <div className="pb-4">
            <button className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full py-2 px-4 md:px-6">
              <Link href="/recital">
                <a className="flex items-center gap-2 text-lg md:text-xl">
                  <span>Watch more</span>
                  <i className="fa-solid fa-angle-right" />
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
