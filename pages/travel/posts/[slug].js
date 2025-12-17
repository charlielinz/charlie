import fs from "fs";
import path from "path";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import AdInPost from "../../../components/AdInPost";
import { components } from "../../../posts/travelposts-handler";
import { travelPosts } from "../../../posts/posts";

import { motion } from "framer-motion";
import Image from "next/image";

const Post = ({ postContent, postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title} | Charlie Lin</title>
        <meta name="author" content="Charlie Lin"></meta>
      </Head>

      <div className="bg-stone-50 min-h-screen">
        {/* Cinematic Hero */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
             <Image
                src={postData.cover_image}
                alt={postData.title}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-75"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full px-6 md:px-20 pb-12 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-screen-xl mx-auto"
                >
                    <span className="text-amber-500 font-serif italic text-xl mb-4 block">
                        {postData.travel_date}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-stone-50 leading-tight mb-6">
                        {postData.title}
                    </h1>
                </motion.div>
             </div>
        </div>

        {/* Article Content */}
        <div className="max-w-screen-md mx-auto px-6 py-20">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="prose prose-stone prose-lg md:prose-xl prose-headings:font-serif prose-headings:font-normal prose-a:text-amber-600 prose-img:rounded-sm bg-white p-8 md:p-16 shadow-xl shadow-stone-200/50 -mt-20 relative z-10"
            >
                <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
            </motion.div>
            
            <div className="mt-20 mb-12 flex justify-center">
                <div className="w-12 h-[1px] bg-amber-600"></div>
            </div>

            <AdInPost />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const postFiles = fs.readdirSync(path.join("posts/travel"));
  const postPaths = postFiles.map((filename) => {
    return { params: { slug: path.basename(filename, ".md") } };
  });
  return {
    paths: postPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const postFilePath = "posts/travel/" + slug + ".md";
  const postContent = fs.readFileSync(postFilePath, "utf8");

  const postInfos = Object.values(travelPosts);
  const postData = postInfos.filter((post) => post.slug === slug)[0];
  return {
    props: { postContent, postData },
  };
};
export default Post;
