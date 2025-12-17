import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroBanner from "../HeroBanner";
import useWindowWidth from "../../hooks/useWindowWidth";
import me from "../../public/img/index/me.jpg";
import { flags } from "../../data/home";

const IntroSection = () => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] bg-stone-50 overflow-hidden">
        <HeroBanner />
        <div className="absolute bottom-10 left-6 md:left-20 max-w-md">
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="text-stone-500 font-sans text-sm tracking-widest uppercase mb-2"
           >
             Portfolio 2025
           </motion.p>
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2, duration: 1 }}
             className="text-stone-900 font-serif text-2xl md:text-3xl italic"
           >
             "Life is short. Do not regret, do not hesitate."
           </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0">
            <Image
              src={me}
              alt="me"
              fill
              style={{ objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900">
              Engineer / <br/>
              <span className="italic text-amber-600">Pianist</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed max-w-lg font-sans font-light">
              Designing digital experiences and musical moments. Based in a world of logic and emotion, finding the perfect harmony between code and composition.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
               {["Travel", "Foodie", "Coding", "Music"].map((tag) => (
                 <span key={tag} className="px-4 py-2 border border-stone-200 rounded-full text-sm text-stone-500 uppercase tracking-wider hover:border-amber-600 hover:text-amber-600 transition-colors">
                   {tag}
                 </span>
               ))}
            </div>

            <div className="flex gap-4 mt-8 opacity-60 hover:opacity-100 transition-opacity">
              {flags.map((flag, index) => (
                <div key={index} className="relative w-8 h-6 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={flag.src}
                    alt={flag.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8">
                <Link href="/about" className="inline-block border-b border-stone-900 pb-1 text-stone-900 font-serif italic text-xl hover:text-amber-600 hover:border-amber-600 transition-colors">
                  Read Full Bio
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
