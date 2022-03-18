import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <>
      <div className="text-zinc-700 flex flex-col justify-end items-center md:items-start gap-4">
        <motion.div
          className="text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          This is
        </motion.div>
        <div className="md:translate-x-0 text-7xl sm:text-8xl lg:text-9xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
            }}
          >
            CHARLIE
          </motion.div>
          <motion.div
            className="-translate-y-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              delay: 3,
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
