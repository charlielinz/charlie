import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import selfie from "../public/img/about/selfie.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>About Charlie Lin</title>
      </Head>
      <div className="bg-stone-50 min-h-screen text-stone-900 pb-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-20 pt-32 md:pt-48">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            
            {/* Sticky Image Section */}
            <div className="md:col-span-5 relative">
                <div className="md:sticky md:top-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative aspect-[3/4] w-full"
                    >
                        <Image 
                            src={selfie} 
                            alt="Charlie Lin" 
                            fill
                            style={{ objectFit: "cover" }}
                            className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                    </motion.div>
                    <div className="mt-6 flex justify-between items-center border-t border-stone-200 pt-4">
                        <span className="font-serif italic text-stone-500">Founded 2025</span>
                        <span className="font-serif italic text-amber-600">Taipei, Taiwan</span>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="md:col-span-7 flex flex-col justify-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-serif text-6xl md:text-8xl leading-none mb-12 mix-blend-multiply"
                >
                    About <br/>
                    <span className="italic text-amber-600 block md:translate-x-20">Charlie</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="space-y-8 text-lg font-light leading-relaxed max-w-xl"
                >
                    <p className="font-serif text-2xl md:text-3xl leading-tight text-stone-800">
                      "Life is short. Do not regret, do not hesitate."
                    </p>
                    
                    <div className="w-12 h-[1px] bg-amber-600 my-8"></div>

                    <p>
                      Hello, I'm Charlie Lin—an explorer at the intersection of logic and emotion.
                    </p>
                    <p>
                      By day, I architect digital solutions as a software engineer. By night, I immerse myself in the profound world of classical piano. This duality defines my approach to life: rigorous structure meeting boundless expression.
                    </p>
                    <p>
                        I founded this space to document a life lived fully. Whether it's hunting for the perfect omakase, exploring hidden corners of the globe, or analyzing a complex musical score, I approach everything with curiosity and intensity.
                    </p>
                    <p className="font-serif italic text-stone-500 pt-4">
                        Welcome to my collection of moments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-8 mt-20 border-t border-stone-200 pt-12">
                   <div>
                       <h3 className="font-serif text-xl mb-4 text-stone-400">Services</h3>
                       <ul className="space-y-2 font-light">
                           <li>Web Development</li>
                           <li>Piano Performance</li>
                           <li>Travel Consultation</li>
                           <li>Food Critique</li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="font-serif text-xl mb-4 text-stone-400">Connect</h3>
                        <ul className="space-y-2 font-light">
                           <li><a href="#" className="hover:text-amber-600 transition-colors">Instagram</a></li>
                           <li><a href="#" className="hover:text-amber-600 transition-colors">LinkedIn</a></li>
                           <li><a href="#" className="hover:text-amber-600 transition-colors">Email</a></li>
                       </ul>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
