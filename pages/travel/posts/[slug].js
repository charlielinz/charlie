import fs from "fs";
import path from "path";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import AdInPost from "../../../components/AdInPost";
import { components } from "../../../posts/travelposts-handler";
import { travelPosts } from "../../../posts/posts";

const Post = ({ postContent, postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <div className="py-6 md:px-6 max-w-screen-xl mx-6 md:mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 gap-2">
            <p className="text-2xl">{postData.title}</p>
            <p className="md:self-end text-gray-400">{postData.travel_date}</p>
          </div>
          <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
        </div>
        <AdInPost />
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
