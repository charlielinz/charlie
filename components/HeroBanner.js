import Image from "next/image";
import background from "../.materials/herobanner.jpg";
import { useState } from "react";

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div
        className={
          isLoaded
            ? "relative w-full h-screen transition ease-out duration-2000"
            : "relative w-full h-screen transition ease-out duration-2000 blur-2xl"
        }
      >
        <Image
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          placeholder="blur"
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <div className="absolute top-0 left-0 w-full h-screen">
          <div className="max-w-screen-md mx-auto mt-96">
            <div className="text-gray-100 flex flex-col justify-end gap-6">
              <div className="text-3xl">This is</div>
              <div className="text-9xl">Charlie</div>
            </div>
          </div>
          <ul className="absolute top-20 right-40 text-lg text-gray-300 flex gap-2">
            <li>About me</li>
            <li>．</li>
            <li>Blog</li>
            <li>．</li>
            <li>Recitals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
