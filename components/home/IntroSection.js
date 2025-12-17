import Image from "next/image";
import Link from "next/link";
import HeroBanner from "../HeroBanner";
import useWindowWidth from "../../hooks/useWindowWidth";
import me from "../../public/img/index/me.jpg";
import { flags } from "../../data/home";

const IntroSection = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <section className="relative w-full h-96 bg-gray-200 text-gray-600">
        <div className="relative pt-32 lg:pt-24 z-10 max-w-screen-xl mx-6 md:mx-auto md:px-6">
          <HeroBanner />
        </div>
        <svg
          className="absolute top-96 flex w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-gray-200"
            d={`M0 0 Q${windowWidth / 2} 100, ${windowWidth} 0`}
            stroke="none"
          />
        </svg>
      </section>
      <section className="flex flex-col md:flex-row py-24 max-w-screen-xl mx-6 md:mx-auto gap-14 md:px-6">
        <div className="flex md:flex-col justify-center gap-4">
          <div className="relative w-60 md:w-48 h-60 md:h-48">
            <Image
              src={me}
              alt="me"
              fill
              style={{ objectFit: "contain" }}
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
            <div>
              <i className="fa-solid fa-tags text-xl w-6" />
              <span className="text-xl pl-4">
                Travel / Foodie / Bar / Coding / Music
              </span>
            </div>
            <div className="flex">
              <i className="fa-solid fa-map-pin text-xl w-6 self-center" />
              <span className="flex gap-2 text-2xl pl-4">
                {flags.map((flag, index) => (
                  <Image
                    key={index}
                    src={flag.src}
                    alt={flag.alt}
                    width={32}
                    height={28}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
