import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import recitalPoster from "../../public/img/index/recital-poster.jpg";
import { chamberMusic } from "../../data/home";

const RecitalSection = () => {
    return (
      <section className="bg-stone-900 text-stone-50 py-32 overflow-hidden relative">
        <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-20 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-1/2 max-w-sm"
          >
            <div className="absolute inset-0 bg-amber-600 blur-3xl opacity-20 transform -rotate-6"></div>
            <Image
              src={recitalPoster}
              alt="recital-poster"
              width={350}
              height={500}
              className="relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
  
          <div className="w-full md:w-1/2 flex flex-col gap-8">
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <h2 className="font-serif text-5xl md:text-7xl mb-6">
                    Classic <br/>
                    <span className="italic text-amber-600">Music</span>
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                    Approaching classical music should be purely emotional. Immerse yourself in the soundscape of solo and chamber performances.
                </p>
  
                <ul className="space-y-4 mb-12 border-l border-stone-800 pl-6">
                    {chamberMusic.map((item, index) => (
                        <li key={index} className="font-serif text-xl md:text-2xl text-stone-300 italic">
                            {item}
                        </li>
                    ))}
                </ul>
  
                <Link
                  href="/recital"
                  className="group inline-flex items-center gap-4 text-xl font-serif text-amber-600 hover:text-amber-500 transition-colors"
                >
                  <span className="border-b border-amber-600 group-hover:border-amber-500 pb-1">View Schedule</span>
                  <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                </Link>
             </motion.div>
          </div>
  
        </div>
      </section>
    );
  };

export default RecitalSection;
