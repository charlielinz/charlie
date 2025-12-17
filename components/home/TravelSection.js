import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { travelPhotos } from "../../data/home";

const TravelSection = () => {
  return (
    <section className="bg-stone-900 text-stone-50 py-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-6">
            <span className="italic text-amber-600 block mb-2">Private</span>
            Tour Guide
          </h2>
          <p className="text-stone-400 text-lg max-w-md font-light">
            Discovering hidden gems and local favorites. Travel is not just about the destination, but the perspective.
          </p>
        </div>
        <Link 
            href="/travel/posts" 
            className="group flex items-center gap-4 text-xl font-serif italic hover:text-amber-600 transition-colors"
        >
            <span>View All Journals</span>
            <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-20 -mx-6 md:-mx-20 scrollbar-hide">
        {travelPhotos.map((photo, index) => (
            <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative min-w-[300px] md:min-w-[400px] aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            >
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-sm"
                />
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
