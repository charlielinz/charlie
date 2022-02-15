import {
  useSpring,
  useTransition,
  animated,
  config,
  easings,
} from "react-spring";
import { useState, useEffect } from "react";

const HeroBanner = () => {
  const slideInLeft = useSpring({
    from: { width: "100vw" },
    to: { width: "67vw" },
    config: {
      duration: 1500,
      easing: easings.easeInOutQuad,
    },
  });
  const slideInRight = useSpring({
    from: { marginLeft: "33vw" },
    to: { marginLeft: "0vw" },
    config: {
      duration: 1500,
      easing: easings.easeInOutQuad,
    },
  });
  const propsFadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1500,
    },
    delay: 1000,
  });

  const [isToggle, setIsToggle] = useState(true);
  const transitions = useTransition(isToggle, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isToggle,
    delay: 1500,
    config: config.molasses,
    onRest: () => setIsToggle(!isToggle),
  });

  return (
    <>
      <div className="grid grid-cols-3 items-stretch h-screen">
        <animated.div
          style={slideInLeft}
          className="col-start-1 col-end-3 grid grid-rows-6"
        >
          <div className="row-start-1 row-end-2 bg-gray-300" />
          <div className="row-start-2 row-end-7 bg-gray-50">
            <div className="flex flex-col justify-center w-5/6 lg:w-3/5 h-full mx-auto">
              <div>
                <div className="text-2xl lg:text-4xl mb-4 ">
                  <animated.div style={propsFadeIn}>This is</animated.div>
                </div>
                <div className="text-5xl lg:text-8xl my-8">
                  <div className="h-8 lg:h-24 flex items-center">
                    {transitions(({ opacity }, item) =>
                      item ? (
                        <animated.div
                          style={{
                            position: "absolute",
                            opacity: opacity.to({
                              range: [0.0, 1.0],
                              output: [0, 1],
                            }),
                          }}
                        >
                          CHARLIE
                        </animated.div>
                      ) : (
                        <animated.div
                          style={{
                            position: "absolute",
                            opacity: opacity.to({
                              range: [1.0, 0.0],
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
                <div>
                  <animated.div style={propsFadeIn}>Art & Tech</animated.div>
                </div>
                <div>
                  <animated.div style={propsFadeIn}>
                    Emotional & Rational
                  </animated.div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
        <animated.div
          style={slideInRight}
          className="col-start-3 col-end-4 grid grid-rows-6"
        >
          <div className="row-start-1 row-end-2 bg-gray-50"></div>
          <div className="row-start-2 row-end-7 bg-gray-300"></div>
        </animated.div>
      </div>
    </>
  );
};

export default HeroBanner;
