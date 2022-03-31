import fs from "fs";
import path from "path";
import Head from "next/head";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { components } from "../../../posts/travelposts-handler";
import { travelPosts } from "../../../posts/posts";

const Post = ({ postContent, postData }) => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  });
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <div className="sticky top-0 z-50 w-full bg-gray-50 md:opacity-95">
        <Navbar />
      </div>
      <div className="py-6 md:px-6 max-w-screen-xl mx-6 md:mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 gap-2">
            <p className="text-2xl">{postData.title}</p>
            <p className="md:self-end text-gray-400">{postData.travel_date}</p>
          </div>
          <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
        </div>
        <ins
          className="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5418119328506173"
          data-ad-slot="3519917345"
        ></ins>
      </div>
      <Footer />
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
