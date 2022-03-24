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
      <div className="sticky top-0 z-50 w-full bg-gray-50 md:opacity-95">
        <Navbar />
      </div>
      <section className="relative w-full h-96 bg-gray-200 text-gray-600">
        <div className="pt-32 lg:pt-24 z-10 max-w-screen-xl mx-6 md:mx-auto md:px-6">
          <HeroBanner />
        </div>
      </section>
      <section className="flex flex-col md:flex-row py-24 max-w-screen-xl mx-6 md:mx-auto gap-14 md:px-6">
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
      </section>
      <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 w-full py-6 md:py-16 max-w-screen-xl mx-auto">
          <div className="mx-6 md:mr-24 md:mt-4 md:mb-24">
            <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 md:gap-8">
              <div className="transform duration-200 md:hover:scale-110 md:-rotate-6 overflow-visible">
                <Image className="rounded-xl" src={travel1} alt="travel-1" />
              </div>
              <div className="col-start-3 transform duration-200 md:hover:scale-110 md:rotate-6 md:translate-x-6 md:translate-y-18">
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
          <div className="flex flex-col min-w-[45%] bg-slate-900 rounded-l-3xl py-16 px-6 ml-6 md:ml-0 md:mr-6">
            <i className="fa-solid fa-plane pb-4 text-amber-500 text-xl"></i>
            <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
              In-depth travel & private tour guide.
            </p>
            <p className="text-gray-400">
              Close to the local and discover those places you may miss. Find
              and establish your own travel style.
            </p>
            <button className="max-w-fit md:mt-auto mt-6 bg-gradient-to-br from-amber-500 to-amber-300 text-slate-900 rounded-full py-2 px-4 md:px-6">
              <Link href="/travel/posts">
                <a className="flex items-center gap-2 text-lg md:text-xl">
                  <span>Watch more</span>
                  <i className="fa-solid fa-angle-right" />
                </a>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50">
        <div className="flex flex-col md:flex-row w-full py-6 gap-8 md:py-28 max-w-screen-xl mx-auto">
          <div className="flex flex-col min-w-[45%] bg-slate-900 rounded-r-3xl py-16 px-6 mr-6 md:mr-0 md:ml-6">
            <i className="fa-solid fa-utensils pb-4 text-amber-500 text-xl"></i>
            <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
              No more struggle with your meals.
            </p>
            <p className="text-gray-400">
              Tons of food officially review by Charlie Lin, the next Michelin.
            </p>
            <ul className="text-gray-400 py-6">
              <p className="text-gray-50 text-2xl font-semibold py-4">
                Sort & Filter features
              </p>
              <li className="list-disc list-inside">
                Sort by date, rate & price
              </li>
              <li className="list-disc list-inside">Filter by rate</li>
            </ul>
            <button className="max-w-fit md:mt-auto bg-gradient-to-br from-amber-500 to-amber-300 text-slate-900 rounded-full py-2 px-4 md:px-6">
              <Link href="/food/posts">
                <a className="flex items-center gap-2 text-lg md:text-xl">
                  <span>Watch more</span>
                  <i className="fa-solid fa-angle-right" />
                </a>
              </Link>
            </button>
          </div>
          <div className="min-w-[45%] my-6 mx-6 rounded-xl shadow-lg">
            <div className="p-4 space-y-2">
              <div className="relative flex flex-col md:flex-row justify-between py-2">
                <div className="flex">
                  <motion.div
                    animate={{ opacity: [1, 0, 0, 1, 1] }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.5",
                      repeat: Infinity,
                      repeatDelay: "1.5",
                      ease: "easeInOut",
                    }}
                  >
                    <button className="py-1 px-5 text-lg">Sort by</button>
                    <i className="fa-solid fa-chevron-down"></i>
                  </motion.div>
                  <motion.div
                    className="absolute"
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.5",
                      repeat: Infinity,
                      repeatDelay: "1.5",
                      ease: "easeInOut",
                    }}
                  >
                    <button className="py-1 px-5 text-lg">
                      Rate: high to low
                    </button>
                    <i className="fa-solid fa-chevron-down"></i>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    className="absolute"
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.8",
                      repeat: Infinity,
                      repeatDelay: "1.2",
                      ease: "easeInOut",
                    }}
                  >
                    <button className="py-1 px-5 text-lg">Filter</button>
                    <i className="fa-solid fa-chevron-down"></i>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.8",
                      repeat: Infinity,
                      repeatDelay: "1.2",
                      ease: "easeInOut",
                    }}
                  >
                    <button className="py-1 px-5 text-lg">Rate ≥ 8.0</button>
                    <i className="fa-solid fa-chevron-down"></i>
                  </motion.div>
                </div>
              </div>
              <div className="py-2">
                <div className="p-4 border-t-2 border-t-gray-200">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Omakase</p>
                      <p className="text-sm text-gray-500">2022-02-22</p>
                      <p className="text-xl pt-2">&gt; $2000</p>
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
                    animate={{
                      translateY: [0, 130, 130, 130, 0],
                      opacity: [1, 1, 0, 0, 1],
                    }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.8",
                      repeat: Infinity,
                      repeatDelay: "1.2",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Pasta</p>
                      <p className="text-sm text-gray-500">2022-01-12</p>
                      <p className="text-xl pt-2">$500 - $1000</p>
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
                    animate={{
                      translateY: [0, -130, -130, -130, 0],
                      opacity: [1, 1, 1, 1, 1],
                    }}
                    transition={{
                      times: [0, 0.25, 0.5, 0.75, 1],
                      delay: 1,
                      duration: "4.8",
                      repeat: Infinity,
                      repeatDelay: "1.2",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="space-y-1">
                      <p className="text-2xl font-bold">Yakiniku</p>
                      <p className="text-sm text-gray-500">2021-12-30</p>
                      <p className="text-xl pt-2">$1000 - $2000</p>
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
      </section>
      <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50 mb-12">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between max-w-screen-xl mx-auto py-6">
          <span className="mx-12 my-6">
            <Image
              src={recitalPoster}
              alt="recital-poster"
              width={350}
              height={500}
            />
          </span>
          <div className="max-w-screen-md mx-6 py-16 px-6 min-w-[40%] bg-slate-900 rounded-3xl">
            <i className="fa-solid fa-music pb-4 text-amber-500 text-xl"></i>
            <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
              Approaching to classical music is way too easy.
            </p>
            <p className="text-gray-400 pb-4 md:pb-12">
              Get into the classical music scene with this guide, enjoy several
              recitals here.
            </p>
            <div className="hidden md:block">
              <p className="text-gray-50 text-2xl font-semibold py-4">
                One solo & Two chambers
              </p>
              <ul className="text-gray-400 pb-12">
                <li className="list-disc list-inside">Piano solo recital</li>
                <li className="list-disc list-inside">
                  Piano trio chamber - piano, oboe, bassoon
                </li>
                <li className="list-disc list-inside">
                  Piano trio chamber - piano, flute, clarinet
                </li>
              </ul>
            </div>
            <div className="pb-4">
              <button className="bg-gradient-to-br from-amber-500 to-amber-300 text-slate-900 rounded-full py-2 px-4 md:px-6">
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
      </section>
      <Footer />
    </>
  );
};

export default Home;
