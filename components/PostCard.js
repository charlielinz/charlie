import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const PostCard = ({ postData }) => {
  const windowWidth = useWindowWidth();
  const [imageSize, setImageSize] = useState({ width: "240", height: "180" });
  useEffect(() => {
    if (windowWidth >= 768) {
      setImageSize({ width: "240", height: "180" });
    } else if (windowWidth < 768 && windowWidth >= 480) {
      setImageSize({ width: "200", height: "150" });
    } else {
      setImageSize({ width: "480", height: "360" });
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col xs:flex-row gap-2 sm:gap-6 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="shrink-0">
        <Image
          src={postData.cover_image}
          alt="cover-image"
          width={imageSize.width}
          height={imageSize.height}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="text-xl">{postData.title}</div>
        <div className="text-gray-400 text-sm">{postData.travel_date}</div>
        <div className="mt-auto ml-auto mb-1.5 py-1 w-28 bg-gray-200 hover:bg-gray-300 duration-200 rounded-sm text-center text-sm">
          <Link href={`/travel/posts/${postData.slug}`} passHref>
            <a>Read more...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
