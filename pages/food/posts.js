import { useState, useEffect } from "react";
import Head from "next/head";

import useWindowWidth from "../../hooks/useWindowWidth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import Dropdown from "../../components/Dropdown";
import { foodPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  const [isSortMenuOpened, setIsSortMenuOpened] = useState(false);
  const [isFilterMenuOpened, setIsFilterMenuOpened] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by");
  const [filterBy, setFilterBy] = useState("Filter");
  const sortOptions = [
    "Newest (default)",
    "Rate: high to low",
    "Rate: low to high",
    "Price: high to low",
    "Price: low to high",
  ];
  const filterOptions = ["Rate ≥ 8.5", "Rate ≥ 8.0", "Rate ≥ 7.5", "Default"];
  const getSortFunc = () => {
    switch (sortBy) {
      case "Rate: high to low":
        return (a, b) => b.rate - a.rate;
      case "Rate: low to high":
        return (a, b) => a.rate - b.rate;
      case "Price: high to low":
        return (a, b) => b.price.tier - a.price.tier;
      case "Price: low to high":
        return (a, b) => a.price.tier - b.price.tier;
      default:
        return (a, b) => Date.parse(b.date) - Date.parse(a.date);
    }
  };
  const getFilterFunc = () => {
    switch (filterBy) {
      case "Rate ≥ 8.5":
        return (post) => post.rate >= 8.5;
      case "Rate ≥ 8.0":
        return (post) => post.rate >= 8.0;
      case "Rate ≥ 7.5":
        return (post) => post.rate >= 7.5;
      default:
        return () => true;
    }
  };
  const getPostDatas = () =>
    [...postDatas.sort(getSortFunc(sortBy))].filter(getFilterFunc(filterBy));
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
      <Head>
        <title>Food Posts</title>
        <meta name="title" content="This is Charlie Lin"></meta>
        <meta name="author" content="Charlie Lin"></meta>
        <meta name="og:title" content="This is Charlie Lin"></meta>
        <meta name="og:author" content="Charlie Lin"></meta>
      </Head>
      <Navbar />
      <div className="space-y-4 max-w-screen-xl mx-6 md:mx-auto md:py-12 md:px-6">
        <div className="relative max-w-screen-md">
          <div className="absolute z-10">
            <Dropdown
              isMenuOpened={isSortMenuOpened}
              setIsMenuOpened={setIsSortMenuOpened}
              options={sortOptions}
              optionName={sortBy}
              setOptionName={setSortBy}
            />
          </div>
          <div className="absolute z-10 right-0">
            <Dropdown
              isMenuOpened={isFilterMenuOpened}
              setIsMenuOpened={setIsFilterMenuOpened}
              options={filterOptions}
              optionName={filterBy}
              setOptionName={setFilterBy}
            />
          </div>
        </div>
        <div className="relative z-0 top-14 md:top-10 pb-20">
          <PostList postDatas={getPostDatas()} imageSize={imageSize} />
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
