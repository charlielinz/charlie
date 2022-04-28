import fs from "fs";
import path from "path";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Carousel from "../../../components/Carousel";
import { components } from "../../../posts/foodposts-handler";
import { foodPosts } from "../../../posts/posts";

const Post = ({ postContent, postData, postImgPaths }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <div className="mx-6 max-w-screen-xl gap-4 py-6 md:mx-auto md:flex md:px-6">
        <Carousel postImgPaths={postImgPaths} />
        <div className="flex w-full py-6 md:py-0">
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl">{postData.title}</p>
            <p className="text-sm text-gray-500 md:text-base">
              {postData.date}
            </p>
            <div className="pb-6 ml-auto flex items-center gap-1">
              <i className="fa-solid fa-star text-lg text-amber-400"></i>
              <p className="text-lg">{postData.rate}</p>
            </div>
            <ReactMarkdown components={components}>{postContent}</ReactMarkdown>
          </div>
        </div>
        <iframe
          className="block h-36 w-full md:hidden"
          frameborder="0"
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAbFmwpMXyGVjJCkgEHk1J_8hqJ9cvO-Z8&q=${postData.title}`}
          allowfullscreen
        ></iframe>
      </div>
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
