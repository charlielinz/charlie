import Image from "next/image";
import { useState, useEffect } from "react";
import { useTransition, animated, easings } from "react-spring";
import background from "../.materials/herobanner.jpg";

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isToggle, setIsToggle] = useState(true);
  const transitions = useTransition(isToggle, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isToggle,
    config: {
      easing: easings.easeInOutQuad,
      duration: 3000,
    },
    onRest: () => setIsToggle(!isToggle),
  });

  useEffect(() => {
    const resize = () => {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);
  });
  
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
          <div className="md:max-w-screen-sm lg:max-w-screen-md mx-auto mt-96">
            <div className="text-gray-100 flex flex-col justify-end items-center md:items-start gap-6">
              <div className="text-2xl lg:text-3xl">This is</div>
              <div className="md:translate-x-0 text-7xl sm:text-8xl lg:text-9xl">
                {transitions(({ opacity }, item) =>
                  item ? (
                    <animated.div
                      style={{
                        margin: "0",
                        opacity: opacity.to({
                          range: [0, 1],
                          output: [0, 1],
                        }),
                      }}
                    >
                      CHARLIE
                    </animated.div>
                  ) : (
                    <animated.div
                      style={{
                        margin: "0",
                        transform: "translateY(-100%)",
                        opacity: opacity.to({
                          range: [1, 0],
                          output: [1, 0],
                        }),
                      }}
                    >
                      EILRAHC
                    </animated.div>
                  )
                )}
              </div>
            </div>
          </div>
          <ul className="absolute top-20 translate-x-1/2 md:translate-x-0 right-1/2 md:right-32 lg:right-40 text-lg md:text-xl text-gray-300 flex gap-2">
            <li>About</li>
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
