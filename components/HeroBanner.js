import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="relative z-10 text-center mix-blend-difference text-stone-900 pointer-events-none">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-[12vw] leading-none tracking-tighter"
        >
          CHARLIE
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-[12vw] leading-none tracking-tighter italic text-amber-600"
        >
          LIN
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroBanner;
