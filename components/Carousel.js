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
  const getImgClassName = (index) => {
    if (currentIndex === 0) {
      if (index === currentIndex) {
        return "";
      } else if (index === currentIndex + 1 || index === currentIndex + 2) {
        return "opacity-50";
      } else {
        return "hidden";
      }
    } else if (currentIndex === length - 1) {
      if (index === currentIndex) {
        return "";
      } else if (index === currentIndex - 1 || index === currentIndex - 2) {
        return "opacity-50";
      } else {
        return "hidden";
      }
    }
    if (index === currentIndex) {
      return "";
    } else if (index === currentIndex - 1 || index === currentIndex + 1) {
      return "opacity-50";
    } else {
      return "hidden";
    }
  };
  return (
    <div className="grid gap-4 auto-rows-min shrink-0">
      <span className="flex justify-center col-start-2 col-end-3">
        <Image
          src={postImgPaths[currentIndex]}
          alt={postImgPaths[currentIndex]}
          width={270}
          height={360}
        />
      </span>
      <button onClick={previousImg} className="col-start-1 col-end-2 row-start-2 row-end-3">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="col-start-2 col-end-3 flex justify-between mx-1 md:mx-0">
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
      <button onClick={nextImg} className="col-start-3 col-end-4 row-start-2 row-end-3">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
