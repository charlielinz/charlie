import Image from "next/image";
import { useState } from "react";
import { useTransition, animated, easings } from "react-spring";
import background from "../.materials/herobanner.jpg";

const HeroBanner = ({ setIsLoaded }) => {
  const [isToggle, setIsToggle] = useState(true);
  const transitions = useTransition(isToggle, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      easing: easings.easeInOutQuad,
      duration: 3000,
    },
    onRest: () => {
      setIsToggle(!isToggle);
    },
  });

  return (
    <>
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
      </div>
    </>
  );
};

export default HeroBanner;
