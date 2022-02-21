import Image from "next/image";
import { useEffect, useState } from "react";
import { useTransition, animated, easings } from "react-spring";
import heroBanner from "../public/img/herobanner.jpg";

const HeroBanner = ({ isLoaded, setIsLoaded }) => {
  // isGoingToUnmount is to solve the problem of React-spring re-rendering the component 
  // and involving Next.js Image onLoadingComplete event.
  // see Issue #2
  const [isGoingToUnmount, setIsGoingToUnmount] = useState(false);
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
    reverse: isToggle,
    onRest: () => {
      setIsToggle(!isToggle);
    },
  });

  useEffect(() => {
    const cleanup = () => {
      setIsGoingToUnmount(true);
    };
    return cleanup;
  }, []);

  return (
    <>
      {!isGoingToUnmount && (
        <Image
          src={heroBanner}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          placeholder="blur"
          onLoadingComplete={() => {
            isLoaded ? "" : setIsLoaded(true);
          }}
        />
      )}
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
                        range: [0, 1],
                        output: [0, 1],
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
