import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { components } from "../../../posts/posts-handler";
import { travelPosts } from "../../../posts/posts";

const Post = ({ postContent, postData }) => {
  return (
    <>
      <Navbar />
      <div className="prose py-6 md:px-6 max-w-screen-lg mx-6 md:mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 gap-2">
            <p className="text-2xl">{postData.title}</p>
            <p className="md:self-end">{postData.travel_date}</p>
          </div>
          <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
        </div>
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
