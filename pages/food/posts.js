import { useState, useEffect } from "react";

import useWindowWidth from "../../hooks/useWindowWidth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SortButton from "../../components/SortButton";
import PostList from "../../components/PostList";
import { foodPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  const windowWidth = useWindowWidth();
  const [sortedPostDatas, setSortedPostDatas] = useState(postDatas);
  const [sortFilter, setSortFilter] = useState("date");
  const [imageSize, setImageSize] = useState({ width: "120", height: "160" });

  const sortByRate = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => b.rate - a.rate),
    ]);
  };
  const sortByDate = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    ]);
  };
  useEffect(() => {
    if (windowWidth >= 768) {
      setImageSize({ width: "120", height: "160" });
    } else if (windowWidth < 768) {
      setImageSize({ width: "90", height: "120" });
    }
  }, [windowWidth]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-6 md:mx-auto py-12 md:px-6">
        <SortButton
          postDatas={postDatas}
          sortByRate={sortByRate}
          sortByDate={sortByDate}
          sortFilter={sortFilter}
          setSortFilter={setSortFilter}
        />
        <PostList postDatas={postDatas} sortedPostDatas={sortedPostDatas} imageSize={imageSize} />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = foodPosts;
  const postDatas = Object.values(postInfos);
  postDatas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return {
    props: { postDatas },
  };
};

export default Posts;
