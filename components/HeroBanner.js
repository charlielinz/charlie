import { useState } from "react";
import { useTransition, animated, easings } from "react-spring";

const HeroBanner = () => {
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

  return (
    <>
      <div className="text-zinc-700 flex flex-col justify-end items-center md:items-start gap-4 ">
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
    </>
  );
};

export default HeroBanner;
