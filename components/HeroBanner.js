import { motion } from "framer-motion";

const HeroBanner = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  const nameFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
      },
    },
  };
  const nameReverseFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        delay: 3,
        duration: 3,
      },
    },
  };
  return (
    <>
      <div className="text-zinc-700 flex flex-col justify-end items-center md:items-start gap-4">
        <motion.div
          className="text-2xl lg:text-3xl"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          This is
        </motion.div>
        <div className="md:translate-x-0 text-7xl sm:text-8xl lg:text-9xl">
          <motion.div variants={nameFadeIn} initial="hidden" animate="show">
            CHARLIE
          </motion.div>
          <motion.div
            className="-translate-y-full"
            variants={nameReverseFadeIn}
            initial="hidden"
            animate="show"
          >
            EILRAHC
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
