import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { components } from "../../../posts/posts-handler";

const Post = ({ content }) => {
  return (
    <>
      <Navbar />
      <div className="prose max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        <ReactMarkdown children={content} components={components} />
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
  const content = fs.readFileSync(postFilePath, "utf8");
  return {
    props: { content },
  };
};
export default Post;
