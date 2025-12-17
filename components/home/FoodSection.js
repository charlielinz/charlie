import Link from "next/link";
import { motion } from "framer-motion";
import { foodReviews } from "../../data/home";

const FoodSection = () => {
    return (
      <section className="bg-stone-50 text-stone-900 py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-serif text-6xl md:text-8xl mb-8 leading-none">
                  Taste <br/>
                  <span className="italic text-amber-600">Review</span>
                </h2>
                <p className="text-xl font-light text-stone-600 mb-12 max-w-md">
                   An engineer's logic meets a pianist's sensitivity. Rigorous yet poetic food reviews.
                </p>
                <div className="flex flex-col gap-4 items-start">
                     <p className="font-serif text-2xl italic border-b border-stone-300 pb-2 mb-4 w-full">Features</p>
                     {["Sort by Rate, Date & Price", "Filter by High Rating", "Unbiased Opinions"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-stone-500">
                            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                            <span className="uppercase tracking-widest text-sm">{item}</span>
                        </div>
                     ))}
                </div>
                <Link
                    href="/food/posts"
                    className="inline-block mt-12 bg-stone-900 text-stone-50 px-8 py-4 rounded-full font-serif italic hover:bg-amber-600 transition-colors"
                >
                    Explore Gastronomy
                </Link>
            </motion.div>
          </div>
  
          <div className="relative">
             <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-stone-200 hidden lg:block"></div>
             <div className="flex flex-col gap-12">
                {foodReviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group cursor-pointer"
                    >
                        <div className="flex justify-between items-baseline border-b border-stone-200 pb-4 mb-4 group-hover:border-amber-600 transition-colors">
                            <h3 className="font-serif text-3xl group-hover:text-amber-600 transition-colors">{review.title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="font-serif text-2xl">{review.rate}</span>
                                <i className="fa-solid fa-star text-xs text-amber-500 mb-1"></i>
                            </div>
                        </div>
                        <div className="flex justify-between text-stone-500 font-sans text-sm tracking-wider uppercase">
                            <span>{review.date}</span>
                            <span>{review.price}</span>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
  
        </div>
      </section>
    );
  };

export default FoodSection;
