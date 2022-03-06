import Image from "next/image";
import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const PostCard = ({ postData }) => {
  const windowWidth = useWindowWidth();
  const [imageSize, setImageSize] = useState({ width: "360", height: "270" });
  useEffect(() => {
    if (windowWidth > 1280) {
      setImageSize({ width: "360", height: "270" });
    } else if (windowWidth < 1280 && windowWidth >= 1024) {
      setImageSize({ width: "300", height: "225" });
    } else if (windowWidth < 1024 && windowWidth >= 768) {
      setImageSize({ width: "240", height: "180" });
    } else if (windowWidth < 768 && windowWidth >= 480) {
      setImageSize({ width: "360", height: "270" });
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full lg:w-3/4 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="shrink-0">
        <Image
          src={postData.cover_image}
          alt="cover-image"
          width={imageSize.width}
          height={imageSize.height}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="text-2xl">{postData.title}</div>
        <div className="text-gray-400">{postData.travel_date}</div>
        <div className="mt-auto ml-auto mb-1.5 py-1 w-28 bg-gray-200 hover:bg-gray-300 duration-200 rounded-sm text-center text-sm">Read more...</div>
      </div>
    </div>
  );
};

export default PostCard;
