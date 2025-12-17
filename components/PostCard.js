import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PostCard = ({ postData }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col gap-4"
    >
      <Link href={`/travel/posts/${postData.slug}`} className="block overflow-hidden rounded-sm">
        <div className="relative aspect-[4/3] w-full">
            <Image
            src={postData.cover_image}
            alt={postData.title}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
            />
        </div>
      </Link>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline border-b border-stone-200 pb-2">
            <span className="text-xs font-sans tracking-widest text-stone-500 uppercase">{postData.travel_date}</span>
            <span className="text-xs font-serif italic text-amber-600">Travel</span>
        </div>
        <Link href={`/travel/posts/${postData.slug}`}>
            <h3 className="font-serif text-2xl group-hover:text-amber-600 transition-colors leading-tight">
                {postData.title}
            </h3>
        </Link>
        <Link 
            href={`/travel/posts/${postData.slug}`}
            className="text-stone-400 text-sm mt-2 hover:text-stone-900 transition-colors flex items-center gap-2"
        >
            <span>Read Journal</span>
            <i className="fa-solid fa-arrow-right -rotate-45 text-xs"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
