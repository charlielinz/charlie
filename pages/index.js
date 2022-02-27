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
      <div className="py-16 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        <div className="flex md:flex-col-reverse justify-center md:items-end gap-4">
          <div className="flex md:flex-col items-center gap-1 text-lg md:pr-5">
            <p>It is my life style.</p>
            <p className="underline">
              <Link href="/about">About Charlie Lin</Link>
            </p>
          </div>
          {windowWidth > 768 ? (
            <div className="relative w-48 h-48">
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
      </div>
      <Footer />
    </header>
  );
}
