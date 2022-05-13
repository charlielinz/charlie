import Image from "next/image";
import { useState } from "react";

const Carousel = ({ postImgPaths }) => {
  const length = postImgPaths.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImg = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };
  const previousImg = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };
  const getDistance = (a, b) => {
    return Math.abs(a - b);
  };
  const getImgClassName = (index) => {
    const isEdge = currentIndex === 0 || currentIndex === length - 1;
    const neighborDistance = isEdge ? 2 : 1;
    const distance = getDistance(index, currentIndex);
    if (distance === 0) {
      return "";
    } else if (distance <= neighborDistance) {
      return "opacity-50";
    } else {
      return "hidden";
    }
  };
  return (
    <div className="grid shrink-0 auto-rows-min gap-4 md:fixed">
      <span className="col-start-2 col-end-3 flex justify-center">
        <Image
          src={postImgPaths[currentIndex]}
          alt={postImgPaths[currentIndex]}
          width={270}
          height={360}
        />
      </span>
      <button
        onClick={previousImg}
        className="col-start-1 col-end-2 row-start-2 row-end-3"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="col-start-2 col-end-3 mx-1 flex justify-between md:mx-0">
        {postImgPaths.map((postImgPath, index) => (
          <span className={`${getImgClassName(index)}`} key={index}>
            <Image
              src={postImgPath}
              alt={postImgPath}
              width={84}
              height={112}
              key={index}
            />
          </span>
        ))}
      </div>
      <button
        onClick={nextImg}
        className="col-start-3 col-end-4 row-start-2 row-end-3"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
