import { useState, useEffect } from "react";

import useWindowWidth from "../../hooks/useWindowWidth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import Dropdown from "../../components/Dropdown";
import { foodPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  const [sortedPostDatas, setSortedPostDatas] = useState(postDatas);
  const [isSortMenuOpened, setIsSortMenuOpened] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by");
  const sortOptions = [
    "Newest (default)",
    "Rate: high to low",
    "Rate: low to high",
    "Price: high to low",
    "Price: low to high",
  ];
  const sortByDate = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    ]);
  };
  const sortByRateDesc = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => b.rate - a.rate),
    ]);
  };
  const sortByRateAsc = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => a.rate - b.rate),
    ]);
  };
  const sortByPriceDesc = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => b.price.tier - a.price.tier),
    ]);
  }
  const sortByPriceAsc = () => {
    setSortedPostDatas((postDatas) => [
      ...postDatas.sort((a, b) => a.price.tier - b.price.tier),
    ]);
  }
  const sort = (sortBy) => {
    if (sortBy == "Newest (default)") {
      sortByDate();
    } else if (sortBy == "Rate: high to low") {
      sortByRateDesc();
    } else if (sortBy == "Rate: low to high") {
      sortByRateAsc();
    } else if (sortBy == "Price: high to low") {
      sortByPriceDesc();
    } else if (sortBy == "Price: low to high") {
      sortByPriceAsc();
    }
  };
  const windowWidth = useWindowWidth();
  const [imageSize, setImageSize] = useState({ width: "120", height: "160" });
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
      <div className="space-y-4 max-w-screen-xl mx-6 md:mx-auto md:py-12 md:px-6">
        <div className="absolute z-10">
          <Dropdown
            isMenuOpened={isSortMenuOpened}
            setIsMenuOpened={setIsSortMenuOpened}
            options={sortOptions}
            optionName={sortBy}
            setOptionName={setSortBy}
            formula={sort}
          />
        </div>
        <div className="relative z-0 top-12 md:top-10 pb-20">
          <PostList
            postDatas={postDatas}
            sortedPostDatas={sortedPostDatas}
            imageSize={imageSize}
          />
        </div>
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
