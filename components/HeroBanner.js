import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-center md:items-start gap-4">
        <div className="text-2xl lg:text-3xl">This is</div>
        <div className="md:translate-x-0 text-7xl sm:text-8xl lg:text-9xl">
          <motion.div
            animate={{ opacity: [1, 0, 0, 0, 1] }}
            transition={{
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            CHARLIE
          </motion.div>
          <motion.div
            className="-translate-y-full"
            animate={{ opacity: [0, 0, 1, 0, 0] }}
            transition={{
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            EILRAHC
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
