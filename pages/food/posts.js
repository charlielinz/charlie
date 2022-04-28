import { useState, useEffect } from "react";
import Head from "next/head";
import { Tab } from "@headlessui/react";

import useWindowWidth from "../../hooks/useWindowWidth";
import PostList from "../../components/PostList";
import Dropdown from "../../components/Dropdown";
import { foodPosts } from "../../posts/posts";

const Posts = ({ postDatas }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [postNumbers, setPostNumbers] = useState(0);
  const [isSortMenuOpened, setIsSortMenuOpened] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by");
  const sortOptions = [
    "Newest (default)",
    "Rate: high to low",
    "Rate: low to high",
    "Price: high to low",
    "Price: low to high",
  ];
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
  const categories = [
    "全部文章",
    "台式料理",
    "港式料理",
    "日式料理",
    "韓式料理",
    "法式料理",
    "義式料理",
    "Fusion",
  ];
  const getFilterFunc = () => {
    switch (categories[selectedIndex]) {
      case "台式料理":
        return (post) => post.categories.includes("台式料理");
      case "日式料理":
        return (post) => post.categories.includes("日式料理");
      case "西式料理":
        return (post) => post.categories.includes("西式料理");
      case "韓式料理":
        return (post) => post.categories.includes("韓式料理");
      case "法式料理":
        return (post) => post.categories.includes("法式料理");
      case "義式料理":
        return (post) => post.categories.includes("義式料理");
      case "港式料理":
        return (post) => post.categories.includes("港式料理");
      case "Fusion":
        return (post) => post.categories.includes("Fusion");
      default:
        return () => true;
    }
  };
  const getPostDatas = () =>
    [...postDatas.sort(getSortFunc(sortBy))].filter(
      getFilterFunc(selectedIndex)
    );
  useEffect(() => {
    setPostNumbers(getPostDatas().length);
  });
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
      <div className="mx-6 max-w-screen-xl space-y-4 md:mx-auto md:py-12 md:px-6">
        <div className="relative mx-auto max-w-screen-lg">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="grid grid-flow-col grid-rows-2 justify-around rounded-xl bg-slate-200 py-2 px-1 mb-6 md:grid-rows-1">
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    selected
                      ? "w-full rounded-lg bg-slate-50 px-4 py-1.5 text-amber-800"
                      : "w-full rounded-lg px-4 py-1.5 hover:bg-slate-100"
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <div className="absolute z-10 right-0">
              <Dropdown
                isMenuOpened={isSortMenuOpened}
                setIsMenuOpened={setIsSortMenuOpened}
                options={sortOptions}
                optionName={sortBy}
                setOptionName={setSortBy}
              />
            </div>
            <Tab.Panels className="relative">
              <p className="p-4 text-lg">總共有 {postNumbers} 篇文章</p>
              {categories.map((index) => (
                <Tab.Panel key={index}>
                  <div className=" w-full self-end pb-20 md:top-10">
                    <PostList
                      postDatas={getPostDatas()}
                      imageSize={imageSize}
                    />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
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
