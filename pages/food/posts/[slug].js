import fs from "fs";
import path from "path";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Carousel from "../../../components/Carousel";
import { foodPosts } from "../../../posts/posts";

const Post = ({ postContent, postData, postImgPaths }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:justify-between py-6 md:px-6 max-w-screen-xl mx-6 md:mx-auto">
        <Carousel postImgPaths={postImgPaths} />
        <div className="flex flex-col max-w-screen-md min-w-[40%]">
          <div className="flex pb-4">
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                {postData.title}
              </p>
              <p className="text-sm md:text-base text-gray-500">
                {postData.date}
              </p>
            </div>
            <div className="flex gap-1 ml-auto">
              <i className="fa-solid fa-star text-lg text-amber-400"></i>
              <p className="text-lg">{postData.rate}</p>
            </div>
          </div>
          <ReactMarkdown>{postContent}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const postFiles = fs.readdirSync(path.join("posts/food"));
  const postFilePaths = postFiles.map((filename) => {
    return { params: { slug: path.basename(filename, ".md") } };
  });
  return {
    paths: postFilePaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const postFilePath = "posts/food/" + slug + ".md";
  const postContent = fs.readFileSync(postFilePath, "utf8");
  const postInfos = Object.values(foodPosts);
  const postData = postInfos.filter((post) => post.slug === slug)[0];

  const postImgFolderPath = "public/img/food/" + slug;
  const postImgFolderFiles = fs.readdirSync(postImgFolderPath);
  const isPostImg = (file) => {
    if (file == ".DS_Store" || file == "cover-image.jpg") {
      return false;
    } else {
      return true;
    }
  };
  const postImgPaths = postImgFolderFiles.filter(isPostImg).map((img) => {
    const imgPath = path.join("/img/food", slug, img);
    return imgPath;
  });

  return {
    props: { postContent, postData, postImgPaths },
  };
};

export default Post;
