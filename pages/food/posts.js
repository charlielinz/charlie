import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PostList from "../../components/PostList";
import { getSortedPostsData } from "../../lib/posts";

const Posts = ({ postDatas }) => {
  const [filter, setFilter] = useState("All");
  
  const categories = [
    "All",
    "Taipei", 
    "Japanese",
    "French", 
    "Fusion"
  ];
  
  // Simple mapping for demo purposes, extending the original logic
  const getFilteredPosts = () => {
    if (filter === "All") return postDatas;
    // Map English filter to Chinese categories in data for compatibility
    const map = {
        "Taipei": "台式料理",
        "Japanese": "日式料理",
        "French": "法式料理",
        "Fusion": "Fusion"
    };
    const target = map[filter] || filter;
    return postDatas.filter(post => post.categories.includes(target));
  }

  const filteredPosts = getFilteredPosts();

  return (
    <>
      <Head>
        <title>Gastronomy Guide | Charlie Lin</title>
      </Head>
      <div className="bg-stone-50 min-h-screen pb-20 pt-32 md:pt-48 px-6 md:px-20 text-stone-900">
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div>
                    <h1 className="font-serif text-6xl md:text-8xl leading-none mb-6">
                        Taste <br/>
                        <span className="italic text-amber-600 ml-12 md:ml-24">Review</span>
                    </h1>
                </div>
                <div className="flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                                filter === cat 
                                ? "border-stone-900 bg-stone-900 text-stone-50" 
                                : "border-stone-300 text-stone-500 hover:border-amber-600 hover:text-amber-600"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-stone-300 text-stone-400 font-serif italic text-sm">
                    <div className="col-span-6">Restaurant</div>
                    <div className="col-span-2">Cuisine</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2 text-right">Rating</div>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={filter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                    >
                        {filteredPosts.map((post, index) => (
                            <Link href={`/food/posts/${post.slug}`} key={index} className="group">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-stone-200 group-hover:bg-stone-100 transition-colors md:items-center">
                                    <div className="col-span-6">
                                        <h3 className="font-serif text-2xl md:text-3xl group-hover:text-amber-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <div className="md:hidden text-sm text-stone-500 mt-2 flex gap-4">
                                            <span>{post.categories[0]}</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block col-span-2 text-stone-500 font-light uppercase tracking-wider text-sm">
                                        {post.categories[0]}
                                    </div>
                                    <div className="hidden md:block col-span-2 text-stone-500 font-mono text-sm">
                                        {post.date}
                                    </div>
                                    <div className="col-span-6 md:col-span-2 flex md:justify-end items-center gap-2">
                                        <span className="font-serif text-2xl md:text-3xl text-stone-800">{post.rate}</span>
                                        <i className="fa-solid fa-star text-amber-500 text-xs mb-1"></i>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const postDatas = getSortedPostsData("food");
  return {
    props: { postDatas },
  };
};

export default Posts;
