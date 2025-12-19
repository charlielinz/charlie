import fs from "fs";
import path from "path";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Image from "next/image";
import { components } from "../../../posts/foodposts-handler";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";

const Post = ({ postContent, postData, postImgPaths }) => {
  return (
    <>
      <Head>
        <title>{`${postData.title} | Charlie Lin`}</title>
        <meta name="author" content="Charlie Lin"></meta>
      </Head>

      <div className="bg-stone-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
             {postImgPaths.length > 0 && (
                <Image
                    src={postData.cover_image || (postImgPaths.find(p => p.includes('cover')) || postImgPaths[0])}
                    alt={postData.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="brightness-75"
                    priority
                />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full px-6 md:px-20 pb-12 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-screen-xl mx-auto"
                >
                    <div className="flex items-center gap-4 text-amber-500 mb-4">
                        <span className="font-serif italic text-xl">{postData.date}</span>
                        <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                        <div className="flex gap-1">
                             <i className="fa-solid fa-star text-sm"></i>
                             <span className="text-sm font-bold">{postData.rate}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif text-stone-50 leading-tight mb-2">
                        {postData.title}
                    </h1>
                </motion.div>
             </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 text-stone-900">
            {/* Main Content */}
            <div className="lg:col-span-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="prose prose-stone prose-lg md:prose-xl prose-headings:font-serif prose-headings:font-normal prose-a:text-amber-600 prose-img:rounded-sm"
                >
                    <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
                </motion.div>

                {/* Gallery Grid */}
                {postImgPaths.length > 0 && (
                    <div className="mt-20">
                        <h3 className="font-serif text-3xl mb-8 border-b border-stone-200 pb-4">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {postImgPaths.filter(p => !p.includes('cover')).map((path, idx) => (
                                <div key={idx} className="relative aspect-square md:aspect-[4/3] w-full">
                                    <Image
                                        src={path}
                                        alt={`Gallery image ${idx}`}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-sm hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar / Info */}
            <div className="lg:col-span-4 space-y-12">
                <div className="bg-white p-8 shadow-xl shadow-stone-200/50 sticky top-32">
                    <h3 className="font-serif text-2xl mb-6 text-stone-400">Location</h3>
                    <iframe
                        className="w-full aspect-square grayscale hover:grayscale-0 transition-all duration-500 rounded-sm mb-6"
                        frameBorder="0"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAbFmwpMXyGVjJCkgEHk1J_8hqJ9cvO-Z8&q=${postData.title}&zoom=15`}
                        allowFullScreen
                    ></iframe>
                    <div className="space-y-4 font-light text-sm text-stone-600">
                         {/* Price info could go here if available in postData.price */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs("food");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const postData = await getPostData("food", slug);
  const postImgFolderPath = path.join(process.cwd(), "public/img/food", slug);
  let postImgPaths = [];
  
  if (fs.existsSync(postImgFolderPath)) {
      const postImgFolderFiles = fs.readdirSync(postImgFolderPath);
      postImgPaths = postImgFolderFiles
        .filter(file => !file.startsWith('.') && file !== "cover-image.jpg")
        .map(img => `/img/food/${slug}/${img}`);
  }

  return {
    props: { 
        postContent: postData.content, 
        postData, 
        postImgPaths 
    },
  };
};

export default Post;
