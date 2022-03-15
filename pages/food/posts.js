import { useState, useEffect } from "react";
import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { foodPosts } from "../../posts/posts";
import useWindowWidth from "../../hooks/useWindowWidth";

const posts = ({ postDatas }) => {
  const [sortedDatas, setSortedDatas] = useState(postDatas);
  const [sortFilter, setSortFilter] = useState("date");
  postDatas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  useEffect(() => {
    setSortedDatas(postDatas);
  }, [postDatas]);

  const sortByRate = () => {
    setSortedDatas((postDatas) => [
      ...postDatas.sort((a, b) => b.rate - a.rate),
    ]);
  };
  const sortByDate = () => {
    setSortedDatas((postDatas) => [
      ...postDatas.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    ]);
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
      <div className="py-12 max-w-screen-xl mx-6 md:mx-auto md:px-6">
        <div className="flex gap-8 pb-8">
          <button
            onClick={() => {
              sortByDate(postDatas);
              setSortFilter("date");
            }}
            className={
              sortFilter == "date"
                ? "py-1 px-5 bg-slate-500 text-gray-100 rounded-lg text-lg"
                : "py-1 px-5 bg-slate-200 rounded-lg text-lg"
            }
          >
            New Posts
          </button>
          <button
            onClick={() => {
              sortByRate(postDatas);
              setSortFilter("rate");
            }}
            className={
              sortFilter == "rate"
                ? "py-1 px-5 bg-slate-500 text-gray-100 rounded-lg text-lg"
                : "py-1 px-5 bg-slate-200 rounded-lg text-lg"
            }
          >
            Top Rated
          </button>
        </div>
        {sortedDatas.map((postData, index) => (
          <div
            className="max-w-screen-md border-t-2 border-t-slate-200"
            key={index}
          >
            <div className="flex gap-4 py-4 md:px-4">
              <div className="shrink-0">
                <Image
                  src={postData.cover_image}
                  alt="cover-image"
                  width={imageSize.width}
                  height={imageSize.height}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xl md:text-2xl font-semibold">
                  {postData.title}
                </div>
                <div className="text-sm md:text-base text-gray-500">
                  {postData.date}
                </div>
              </div>
              <div className="flex flex-col ml-auto justify-between">
                <div className="flex gap-1 self-end">
                  <i className="fa-solid fa-star text-lg text-amber-400" />
                  <div className="text-lg">{postData.rate}</div>
                </div>
                <div className="bg-gray-200 hover:bg-gray-300 duration-200 rounded-md text-center px-4 py-1">
                  <a>details</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = foodPosts;
  const postDatas = Object.values(postInfos);
  return {
    props: { postDatas },
  };
};

export default posts;
